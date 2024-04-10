package com.projeto.EnterScience.repository;

import com.projeto.EnterScience.model.Artist;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ArtistRepository extends JpaRepository<Artist, Long> {
    Optional<Artist> findArtistById(Integer id);
}
