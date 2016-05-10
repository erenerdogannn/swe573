package com.unikoop.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.hibernate.validator.constraints.Email;

import javax.persistence.*;

/**
 * Created by Eren on 09/05/16.
 */
@Data
@Entity
public class WorkSlot {

    @Id
    @GeneratedValue
    private int id;

    private String timeStart;
    private String job;

    @ManyToOne
    @JsonIgnore
    private User user;

}
