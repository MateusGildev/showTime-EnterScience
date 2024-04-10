package com.projeto.EnterScience.service;

import com.projeto.EnterScience.model.Artist;
import com.projeto.EnterScience.repository.ArtistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class ArtistService {
    @Autowired
    private ArtistRepository artistRepository;

    public List<Artist> findAll(){
        return artistRepository.findAll();
    }

    public Optional<Artist> findArtistById(Integer id){
        return artistRepository.findArtistById(id);
    }
}
