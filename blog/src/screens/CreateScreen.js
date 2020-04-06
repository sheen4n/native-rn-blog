import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  const handleSubmit = (title, content) => {
    addBlogPost(title, content, () => {
      navigation.navigate("Index");
    });
  };

  return <BlogPostForm onSubmit={handleSubmit}></BlogPostForm>;
};

const styles = StyleSheet.create({});

export default CreateScreen;
