package com.example.post.service;

import com.example.post.entity.Post;
import com.example.post.repo.PostRepository;
import com.example.post.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService {
    private final PostRepository postRepository;
    private final UserRepository userRepository;

    @Override
    public List<Post> getAllPosts() {
        List<Post> posts = postRepository.findAll().stream().toList();
        posts.forEach(p-> p.setUser_id(p.getUser().getId()));
        return posts;
    }

    @Override
    public Post getPostById(Long id) {
        Post post = postRepository.findById(id).orElse(null);
        if (post != null && post.getUser() !=null){
            post.setUser_id(post.getUser().getId());

        } else if (post!=null) {

            post.setUser_id(2L);
        }
        return post;
    }

    @Override
    public Post createPost(Post post) {
        post.setId(null);
        post.setUser(userRepository.findById(post.getUser_id()).get());
        return postRepository.save(post);
    }

    @Override
    public Post updatePost(Long id, Post post) {
        Post existingPost = postRepository.findById(id).orElse(null);
        if (existingPost == null) {
            return null;
        }
        existingPost.setHeader(post.getHeader());
        existingPost.setText(post.getText());
        existingPost.setDate(post.getDate());
        return postRepository.save(existingPost);
    }

    @Override
    public void deletePost(Long id) {
        postRepository.deleteById(id);
    }

    @Override
    public List<Post>  getByUserId(Long id) {
        List<Post> posts = postRepository.findPostsByUser(userRepository.findById(id).get()).stream().toList();
        posts.forEach(p-> p.setUser_id(p.getUser().getId()));
        return posts;
    }
}
