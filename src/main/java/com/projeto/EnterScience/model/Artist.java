package com.projeto.EnterScience.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "tb_artist")
public class Artist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("artistId")
    private Integer id;

    private String artistName;

    private String musicGenre;

    @OneToMany(mappedBy = "artist")
    @JsonIgnore
    private List<Contract> contracts;

    public Artist(Integer id, String artistName, String musicGenre) {
        this.id = id;
        this.artistName = artistName;
        this.musicGenre = musicGenre;
    }

    public Artist() {
    }
}
