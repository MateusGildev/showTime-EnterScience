package com.projeto.EnterScience.service;

import com.projeto.EnterScience.model.Artist;
import com.projeto.EnterScience.model.Contract;
import com.projeto.EnterScience.repository.ArtistRepository;
import com.projeto.EnterScience.repository.ContractRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class DbService {
    @Autowired
    ArtistRepository artistRepository;

    @Autowired
    ContractRepository contractRepository;

    public void initDb(){
        Artist artist1 = new Artist(null, "Bring me The Horizon", "Rock Emo");
        Artist artist2 = new Artist(null, "Abba", "Pop");
        Artist artist3 = new Artist(null, "The Waillers", "Reggae");
        Artist artist4 = new Artist(null, "Hozier", "Alternativa/indie");

        artistRepository.save(artist1);
        artistRepository.save(artist2);
        artistRepository.save(artist3);
        artistRepository.save(artist4);

        Contract contract1 = new Contract(null,"Mateus Gil", artist1,15000.0, LocalDate.now());
        Contract contract2 = new Contract(null,"Matheus Andrade", artist2,60000.0, LocalDate.now());

        contractRepository.save(contract1);
        contractRepository.save(contract2);
    }
}
