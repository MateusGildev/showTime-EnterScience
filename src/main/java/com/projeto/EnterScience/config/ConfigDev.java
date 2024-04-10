package com.projeto.EnterScience.config;

import com.projeto.EnterScience.model.Artist;
import com.projeto.EnterScience.model.Contract;
import com.projeto.EnterScience.repository.ArtistRepository;
import com.projeto.EnterScience.repository.ContractRepository;
import com.projeto.EnterScience.service.DbService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import java.time.LocalDate;

//DEV PROFILE TO USE POSTGRESQL DATABASE, configs are on application-dev.properties
@Configuration
@Profile("dev")
public class ConfigDev {
    @Autowired
    private DbService dbService;

    public void initDb(){
        this.dbService.initDb();
    }
}
