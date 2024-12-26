import PropTypes from 'prop-types';
// import ActionModal from '../../ui/modal/ActionModal';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

const CardProject = ({ item, }) => {
  const {
    _id,
    title,
    users,
    description,
  } = item;

  // Helper para obtener los nombres de los asignados
  const renderAssignedToButtons = () => {
    if (!users || users.length === 0) {
      return (
        <Text className="px-3 py-1 bg-gray-200 text-gray-600 rounded-md text-xs ">
          No asignado
        </Text>
      );
    }

    return users.map((person, index) => (
      <Text
        key={index}
        className="inline-block px-3 py-1 bg-green-200 text-green-800 rounded-md text-sm mr-2 mb-2"
      >
        {person.full_name || 'Nombre no disponible'}
      </Text>
    ));
  };
  return (
    <View className="p-4 bg-white rounded shadow-md mx-auto w-full">

      {/* Area Header */}
      <View className="mb-4">
        <View className="mb-4 flex justify-between">
          <Text className="text-xl font-semibold mb-1 text-primary-darker">
            {title}
          </Text>
          <View className='flex items-center text-primary-light'>
            <Text>Link</Text>
          </View>
        </View>
        <View className="flex flex-wrap items-center gap-2 mt-2 italic">
          <Text>Participantes:</Text> {renderAssignedToButtons()}
        </View>
        {description && (
          <Text className="mt-4 text-sm text-gray-500 italic">
            {description}
          </Text>
        )}
      </View>
    </View>
  )
}

CardProject.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    deploy: PropTypes.string,
    repository: PropTypes.string,
    description: PropTypes.string,
    users: PropTypes.arrayOf(
      PropTypes.shape({
        full_name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  // config: PropTypes.object,
};

export default CardProject