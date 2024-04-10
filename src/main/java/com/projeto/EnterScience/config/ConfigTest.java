package com.projeto.EnterScience.config;

import com.projeto.EnterScience.service.DbService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Configuration
@Profile("test")
public class ConfigTest {

    @Autowired
    private DbService dbService;

    @PostConstruct
    public void initDb(){
        this.dbService.initDb();
    }
}
