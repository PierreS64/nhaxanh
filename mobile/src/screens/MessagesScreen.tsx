import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator
} from 'react-native';
import { Chat, Message } from '../types';

// Mock danh sách hội thoại của người dùng (Chủ nhà/Khách thuê)
const MOCK_CHATS: Chat[] = [
  {
    id: 'chat-1',
    participantId: 'owner-101',
    participantName: 'Nguyễn Văn Hùng (Chủ nhà)',
    participantAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
    lastMessage: 'Dạ vâng, chiều mai 3h bạn qua xem phòng nhé!',
    updatedAt: '17:30'
  },
  {
    id: 'chat-2',
    participantId: 'owner-102',
    participantName: 'Trần Thị Mai (Chủ nhà)',
    participantAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80',
    lastMessage: 'Hóa đơn tiền nước tháng này chị đã gửi rồi em nhé.',
    updatedAt: 'Hôm qua'
  }
];

// Mock tin nhắn ban đầu với AI RentBot
const INITIAL_BOT_MESSAGES: Message[] = [
  {
    id: 'bot-msg-1',
    chatId: 'bot',
    senderId: 'bot',
    text: 'Xin chào! Tôi là Trợ lý ảo tìm kiếm Nhà Xanh. 🤖\n\nBạn có thể gõ nội dung hoặc nhấn giữ biểu tượng micro ở dưới để tìm phòng bằng giọng nói.\n\nVí dụ: "Tìm chung cư mini ở Cầu Giấy dưới 5 triệu có điều hòa và thang máy"',
    createdAt: 'Vừa xong'
  }
];

export default function MessagesScreen({ route, navigation }: any) {
  // Nhận thông tin chuyển tab từ màn hình khác
  const startVoiceBot = route.params?.startVoiceBot;
  const [activeTab, setActiveTab] = useState<'chats' | 'rentbot'>('chats');

  useEffect(() => {
    if (startVoiceBot) {
      setActiveTab('rentbot');
    }
  }, [startVoiceBot]);

  // States cho Chat list
  const [chats, setChats] = useState<Chat[]>(MOCK_CHATS);

  // States cho AI RentBot
  const [botMessages, setBotMessages] = useState<Message[]>(INITIAL_BOT_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isBotThinking, setIsBotThinking] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  // Hàm giả lập gửi tin nhắn text tới AI Bot
  const handleSendText = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: Message = {
      id: `user-msg-${Date.now()}`,
      chatId: 'bot',
      senderId: 'user',
      text: textToSend,
      createdAt: 'Vừa xong'
    };

    setBotMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsBotThinking(true);

    // Giả lập bot phân tích ngôn ngữ tự nhiên (NLP)
    setTimeout(() => {
      let botResponseText = 'Xin lỗi, tôi chưa nhận diện được các tiêu chí tìm kiếm của bạn. Hãy thử nói hoặc gõ rõ ràng hơn nhé (Vị trí, khoảng giá, tiện ích).';
      const textLower = textToSend.toLowerCase();

      if (textLower.includes('cầu giấy')) {
        botResponseText = '🔍 Tôi đã tìm thấy 1 phòng phù hợp tại **Cầu Giấy**:\n\n🏠 **Căn hộ Studio dịch vụ Full đồ cực đẹp Cầu Giấy**\n💵 Giá: 4.500.000 đ/tháng\n📐 Diện tích: 30 m²\n📍 Địa chỉ: 15 Ngõ 102 Trần Duy Hưng\n⭐️ Điểm Vibe: 92%\n\n👉 Bạn muốn liên hệ với chủ nhà hay xem thêm thông tin chi tiết?';
      } else if (textLower.includes('đống đa') || textLower.includes('y')) {
        botResponseText = '🔍 Tôi đã tìm thấy 1 phòng phù hợp tại **Đống Đa**:\n\n🏠 **Chung cư mini cao cấp Đống Đa - Gần đại học Y**\n💵 Giá: 6.000.000 đ/tháng\n📐 Diện tích: 45 m²\n📍 Địa chỉ: 8 Ngõ 26 Chùa Bộc\n⭐️ Điểm Vibe: 88%\n\n👉 Tôi có thể giúp bạn kết nối trò chuyện trực tiếp với chủ nhà!';
      } else if (textLower.includes('giá rẻ') || textLower.includes('bách khoa') || textLower.includes('sinh viên')) {
        botResponseText = '🔍 Tôi đã tìm thấy 1 phòng phù hợp tại **Hai Bà Trưng**:\n\n🏠 **Phòng trọ giá rẻ cho sinh viên gần ĐH Bách Khoa**\n💵 Giá: 2.500.000 đ/tháng\n📐 Diện tích: 20 m²\n📍 Địa chỉ: Ngõ 40 Tạ Quang Bửu\n⭐️ Điểm Vibe: 85%\n\n👉 Đây là phòng trọ khép kín, giá rất sinh viên!';
      }

      const botMsg: Message = {
        id: `bot-msg-${Date.now()}`,
        chatId: 'bot',
        senderId: 'bot',
        text: botResponseText,
        createdAt: 'Vừa xong'
      };

      setBotMessages(prev => [...prev, botMsg]);
      setIsBotThinking(false);
    }, 1500);
  };

  // Giả lập thu âm tìm phòng bằng giọng nói
  const startVoiceRecording = () => {
    setIsRecording(true);
  };

  const stopVoiceRecording = () => {
    setIsRecording(false);
    setIsBotThinking(true);

    // Giả lập kết quả Speech-to-Text sau khi thả tay
    setTimeout(() => {
      const recognizedText = 'Tìm cho mình chung cư mini ở Cầu Giấy dưới 5 triệu có ban công';
      const userMsg: Message = {
        id: `user-msg-${Date.now()}`,
        chatId: 'bot',
        senderId: 'user',
        text: recognizedText,
        isVoice: true,
        createdAt: 'Vừa xong'
      };

      setBotMessages(prev => [...prev, userMsg]);
      setIsBotThinking(true);

      // Bot trả lời sau khi nhận diện giọng nói
      setTimeout(() => {
        const botMsg: Message = {
          id: `bot-msg-${Date.now()}`,
          chatId: 'bot',
          senderId: 'bot',
          text: '🎙️ *Đã chuyển giọng nói thành chữ:* "Tìm cho mình chung cư mini ở Cầu Giấy dưới 5 triệu có ban công"\n\n🔍 Hệ thống đã phân tích từ khóa:\n- Vị trí: Cầu Giấy\n- Loại: Chung cư mini\n- Giá: < 5,000,000 đ\n- Tiện ích: Ban công\n\n🏠 **Căn hộ Studio dịch vụ Full đồ cực đẹp Cầu Giấy** (4.5tr, 30m2) rất khớp với yêu cầu của bạn!\n\n👉 Nhấn vào mục tìm kiếm ngoài trang chủ để xem chi tiết nhé.',
          createdAt: 'Vừa xong'
        };
        setBotMessages(prev => [...prev, botMsg]);
        setIsBotThinking(false);
      }, 1500);

    }, 2000);
  };

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [botMessages, isBotThinking]);

  // Render tab danh sách chat thường
  const renderChatsTab = () => (
    <FlatList
      data={chats}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.chatsList}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.chatItem} activeOpacity={0.7}>
          <Image source={{ uri: item.participantAvatar }} style={styles.chatAvatar} />
          <View style={styles.chatInfo}>
            <View style={styles.chatHeaderRow}>
              <Text style={styles.chatName}>{item.participantName}</Text>
              <Text style={styles.chatTime}>{item.updatedAt}</Text>
            </View>
            <Text style={styles.chatLastMsg} numberOfLines={1}>{item.lastMessage}</Text>
          </View>
        </TouchableOpacity>
      )}
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyIcon}>💬</Text>
          <Text style={styles.emptyText}>Chưa có cuộc hội thoại nào</Text>
        </View>
      }
    />
  );

  // Render tab Robot tìm nhà bằng giọng nói AI
  const renderRentBotTab = () => (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardContainer}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      <ScrollView
        ref={scrollViewRef}
        style={styles.messagesScroll}
        contentContainerStyle={styles.messagesContent}
        showsVerticalScrollIndicator={false}
      >
        {botMessages.map((msg) => {
          const isMe = msg.senderId === 'user';
          return (
            <View
              key={msg.id}
              style={[styles.messageBubble, isMe ? styles.myBubble : styles.otherBubble]}
            >
              {!isMe && <Text style={styles.botAvatarBadge}>🤖 RentBot</Text>}
              <Text style={[styles.messageText, isMe ? styles.myMessageText : styles.otherMessageText]}>
                {msg.text}
              </Text>
              {msg.isVoice && <Text style={styles.voiceLabel}>🎙️ Gửi bằng giọng nói</Text>}
            </View>
          );
        })}

        {isBotThinking && (
          <View style={[styles.messageBubble, styles.otherBubble, styles.thinkingBubble]}>
            <Text style={styles.botAvatarBadge}>🤖 RentBot</Text>
            <ActivityIndicator size="small" color="#2B8A3E" />
            <Text style={styles.thinkingText}>Đang phân tích từ khóa...</Text>
          </View>
        )}
      </ScrollView>

      {/* Khối Nhập/Micro thu âm */}
      <View style={styles.botInputArea}>
        {isRecording ? (
          <TouchableOpacity
            style={styles.recordingOverlay}
            activeOpacity={0.8}
            onPress={stopVoiceRecording}
          >
            <Text style={styles.recordingPulse}>🟢 Đang nghe... Nhấp để hoàn tất</Text>
            <Text style={styles.recordingSub}>"Tìm chung cư Cầu Giấy dưới 5tr..."</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.inputRow}>
            <TextInput
              style={styles.textInput}
              placeholder="Hỏi RentBot hoặc nhấn giữ Mic..."
              value={inputText}
              onChangeText={setInputText}
              onSubmitEditing={() => {
                handleSendText(inputText);
              }}
            />
            {inputText.trim().length > 0 ? (
              <TouchableOpacity
                style={styles.sendBtn}
                onPress={() => handleSendText(inputText)}
              >
                <Text style={styles.sendBtnText}>Gửi</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.micInputBtn}
                onPressIn={startVoiceRecording}
              >
                <Text style={styles.micBtnIcon}>🎙️</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/* Tab Header */}
      <View style={styles.tabHeader}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'chats' && styles.activeTabButton]}
          onPress={() => setActiveTab('chats')}
        >
          <Text style={[styles.tabButtonText, activeTab === 'chats' && styles.activeTabButtonText]}>
            Trò chuyện (Chủ trọ)
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'rentbot' && styles.activeTabButton]}
          onPress={() => setActiveTab('rentbot')}
        >
          <Text style={[styles.tabButtonText, activeTab === 'rentbot' && styles.activeTabButtonText]}>
            🤖 AI RentBot (Voice)
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'chats' ? renderChatsTab() : renderRentBotTab()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  tabHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E9ECEF',
    backgroundColor: '#FFFFFF',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTabButton: {
    borderBottomColor: '#2B8A3E',
  },
  tabButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#868E96',
  },
  activeTabButtonText: {
    color: '#2B8A3E',
  },
  chatsList: {
    paddingVertical: 10,
  },
  chatItem: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F3F5',
    alignItems: 'center',
  },
  chatAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E9ECEF',
  },
  chatInfo: {
    flex: 1,
    marginLeft: 14,
  },
  chatHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  chatName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#212529',
  },
  chatTime: {
    fontSize: 12,
    color: '#ADB5BD',
  },
  chatLastMsg: {
    fontSize: 13,
    color: '#868E96',
  },
  keyboardContainer: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  messagesScroll: {
    flex: 1,
  },
  messagesContent: {
    padding: 16,
    paddingBottom: 20,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  myBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#2B8A3E',
    borderBottomRightRadius: 2,
  },
  otherBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 2,
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  botAvatarBadge: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#2B8A3E',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  messageText: {
    fontSize: 14,
    lineHeight: 20,
  },
  myMessageText: {
    color: '#FFFFFF',
  },
  otherMessageText: {
    color: '#212529',
  },
  voiceLabel: {
    fontSize: 10,
    color: '#E2E2E2',
    fontStyle: 'italic',
    marginTop: 4,
    textAlign: 'right',
  },
  thinkingBubble: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thinkingText: {
    fontSize: 13,
    color: '#868E96',
    marginLeft: 8,
  },
  botInputArea: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E9ECEF',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#F1F3F5',
    borderRadius: 20,
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#495057',
  },
  sendBtn: {
    marginLeft: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#2B8A3E',
    borderRadius: 20,
  },
  sendBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  micInputBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EBFBEE',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  micBtnIcon: {
    fontSize: 18,
  },
  recordingOverlay: {
    backgroundColor: '#FFF5F5',
    borderColor: '#FFE3E3',
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  recordingPulse: {
    color: '#E03131',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },
  recordingSub: {
    color: '#FA5252',
    fontSize: 11,
    fontStyle: 'italic',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 100,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 15,
  },
  emptyText: {
    fontSize: 15,
    color: '#868E96',
    fontWeight: '500',
  },
});
