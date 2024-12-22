import PropTypes from 'prop-types';
import { View, Text, ScrollView } from 'react-native';

const Frame = ({
  children,
  css = 'w-full max-w-4xl',
  title,
}) => {
  return (
    <ScrollView className={`relative min-h-screen bg-gray-50 ${css}`}>
      {title ? (
        <View className="flex flex-row items-center gap-3">
          <Text className="text-3xl font-semibold mb-2">{title}</Text>
        </View>
      ) : null}
      <View className="mx-auto p-8 bg-white shadow-xl min-h-[80vh] rounded-lg overflow-hidden">
        {children}
      </View>
    </ScrollView>
  );
};

Frame.propTypes = {
  children: PropTypes.node.isRequired, // Los children deben ser elementos válidos de React
  css: PropTypes.string, // Clases CSS adicionales como string
  title: PropTypes.string, // Título de la sección
};

export default Frame;
