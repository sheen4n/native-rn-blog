import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const id = navigation.getParam("id");
  const blogPost = state.find(blogPost => blogPost.id === id);

  const handleSubmit = (title, content) => {
    editBlogPost(id, title, content, () => {
      navigation.pop();
    });
  };

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={handleSubmit}
    ></BlogPostForm>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
