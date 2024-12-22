import { useRouter } from "expo-router";

const BackButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.history.back();
  };

  return (
    <Pressable
      onPress={handleClick}
      style={({ pressed }) => [
        {
          position: 'absolute',
          top: 16,
          left: 24,
          padding: 10,
          backgroundColor: pressed ? '#4b4b4b' : '#2d2d2d',
          borderRadius: 50,
          flexDirection: 'row',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 6,
        },
      ]}
    >
      {icons.back(6)}
      <Text style={{ marginLeft: 8, fontSize: 14, fontWeight: '600', color: 'white' }}>
        Volver
      </Text>
    </Pressable>
  );
};

export default BackButton;