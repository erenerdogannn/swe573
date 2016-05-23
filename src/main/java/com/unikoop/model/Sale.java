package com.unikoop.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;

/**
 * Created by Eren on 09/05/16.
 */
@Data
@Entity
public class Sale {

    @Id
    @GeneratedValue
    private short id;

    @CreationTimestamp
    @Column(nullable = false)
    private Timestamp saleTime;

    private float amount;
    private float profit;

    @ManyToOne
    private Product product;

}
