package com.unikoop.model;

import lombok.Data;
import org.hibernate.validator.constraints.Email;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Eren on 09/05/16.
 */
@Data
@Entity
public class User {

    @Id
    @GeneratedValue
    private int id;

    @Column(columnDefinition = "VARCHAR(2048)")
    private String name;

    @Email
    private String email;

    private String password;
    private String job;
    private String telephone;
    private String userType;


    @OneToMany(mappedBy = "user")
    private List<ForumTopic> forumTopics;

    @OneToMany(mappedBy = "user")
    private List<WorkSlot> workSlots;

    /*
    private String photoURL;
     */
}
