package com.unikoop.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.hibernate.validator.constraints.Email;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

/**
 * Created by Eren on 09/05/16.
 */
@Data
@Entity
public class User {

    @Id
    @GeneratedValue
    private short id;

    @Column(columnDefinition = "VARCHAR(2048)")
    private String name;

    @Email
    private String email;
    private String password;
    private String job;
    private String age;
    private String userType;

    @Column(columnDefinition = "MEDIUMTEXT")
    private String photoURL;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<WorkSlot> workSlots;

    @OneToMany(mappedBy = "user", cascade=CascadeType.REMOVE)
    @JsonIgnore
    private List<Comment> comments;


}
