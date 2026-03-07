import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Todo() {

  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");

  // ADD TODO
  const addTodo = () => {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now().toString(),
      text: task,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  // TOGGLE TODO
  const toggleTodo = (id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updated);
  };

  // DELETE TODO
  const deleteTodo = (id) => {
    const filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  // SEARCH FILTER
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>

      <Text style={styles.title}>My Tasks</Text>

      {/* SEARCH */}
      <TextInput
        style={styles.search}
        placeholder="Search todos..."
        value={search}
        onChangeText={setSearch}
      />

      {/* LIST */}
      <FlatList
        data={filteredTodos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>

            <TouchableOpacity onPress={() => toggleTodo(item.id)}>
              <Ionicons
                name={item.completed ? "checkbox" : "square-outline"}
                size={24}
                color="#7D7AFF"
              />
            </TouchableOpacity>

            <Text style={[styles.todoText, item.completed && styles.completed]}>
              {item.text}
            </Text>

            <TouchableOpacity onPress={() => deleteTodo(item.id)}>
              <Ionicons name="trash" size={22} color="red" />
            </TouchableOpacity>

          </View>
        )}
      />

      {/* ADD TODO */}
      <View style={styles.addContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task"
          value={task}
          onChangeText={setTask}
        />

        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <Ionicons name="add" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#7D7AFF",
    paddingTop: 60
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15
  },

  search: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 20
  },

  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },

  todoText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16
  },

  completed: {
    textDecorationLine: "line-through",
    color: "gray"
  },

  addContainer: {
    flexDirection: "row",
    marginTop: 15
  },

  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12
  },

  addButton: {
    backgroundColor: "#FFCC00",
    marginLeft: 10,
    padding: 12,
    borderRadius: 10
  }

});