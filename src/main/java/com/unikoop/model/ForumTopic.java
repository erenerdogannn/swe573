package com.unikoop.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Eren on 09/05/16.
 */
@Data
@Entity
public class ForumTopic {

    @Id
    @GeneratedValue
    private int id;

    private String topic;

    @ManyToOne
    private User user;

    @OneToMany(mappedBy = "forumTopic")
    private List<ForumEntry> forumEntries;

}
