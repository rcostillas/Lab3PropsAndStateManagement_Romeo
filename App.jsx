import React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import ToDoList from './Components/ToDoList';

function App() {
  const [tasks, setTasks] = useState(['Do Laundry', 'Go to gym', 'Walk dog']);

  return (
    <View>
      <ToDoList tasks={tasks} />
    </View>
  );
}
export default App;