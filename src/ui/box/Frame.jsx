import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const Frame = ({
  children,
  css = 'w-full flex-1 items-center justify-center',
  title,
}) => {
  return (
    <View className={`relative bg-gray-50 ${css}`}>
      {title ? (
        <View className="flex flex-row items-center gap-3">
          <Text className="text-3xl font-semibold mb-2">{title}</Text>
        </View>
      ) : null}
      <View className="w-full p-8 bg-white shadow-xl rounded-lg flex-1 items-center justify-center">
        {children}
      </View>
    </View>
  );
};

Frame.propTypes = {
  children: PropTypes.node.isRequired, // Los children deben ser elementos válidos de React
  css: PropTypes.string, // Clases CSS adicionales como string
  title: PropTypes.string, // Título de la sección
};

export default Frame;
