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
    private short id;

    private String job;
    private String timeStart;

    @ManyToOne
    private User user;

}
