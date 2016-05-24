package com.unikoop.repository;

import com.unikoop.model.Comment;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Eren on 21/05/16.
 */
@Repository
public interface CommentRepository extends CrudRepository<Comment, Short> {

}
