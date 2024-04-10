package com.projeto.EnterScience.controller;


import com.projeto.EnterScience.model.Artist;
import com.projeto.EnterScience.repository.ArtistRepository;
import com.projeto.EnterScience.service.ArtistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/artist")
public class ArtistController {
    @Autowired
    private ArtistRepository artistRepository;

    @Autowired
    private ArtistService artistService;

    @GetMapping(value = "/all")
    public List<Artist> findAllArtists(){
        return artistService.findAll();
    }

    @GetMapping(value = "/{id}")
    public Optional<Artist> findArtistById(@PathVariable Integer id){
        return artistService.findArtistById(id);
    }

    @PostMapping("/new")
    public Artist createArtist(@RequestBody Artist artist){
        return artistRepository.save(artist);
    }
}
