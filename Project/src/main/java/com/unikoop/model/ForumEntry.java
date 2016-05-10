package com.unikoop.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

/**
 * Created by Eren on 09/05/16.
 */
@Data
@Entity
public class ForumEntry {

    @Id
    @GeneratedValue
    private int id;

    private String name;

    @ManyToOne
    @JsonIgnore
    private ForumTopic forumTopic;


}
