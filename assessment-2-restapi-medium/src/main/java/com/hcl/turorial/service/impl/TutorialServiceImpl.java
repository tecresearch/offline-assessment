package com.hcl.turorial.service.impl;

import com.hcl.turorial.common.exception.DuplicateResourceException;
import com.hcl.turorial.common.exception.ResourceNotFoundException;
import com.hcl.turorial.dto.TutorialRequest;
import com.hcl.turorial.dto.TutorialResponse;
import com.hcl.turorial.model.Tutorial;
import com.hcl.turorial.repository.TutorialRepository;
import com.hcl.turorial.service.TutorialService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TutorialServiceImpl implements TutorialService {

    @Override
    public TutorialResponse getTutorialByTitle(String title) {
        return null;
    }

    @Override
    public TutorialResponse createTutorial(TutorialRequest tutorialRequest) {
        return null;
    }

    @Override
    public TutorialResponse getTutorialById(Long id) {
        return null;
    }

    @Override
    public TutorialResponse updateTutorial(Long id, TutorialRequest tutorialRequest) {
        return null;
    }

    @Override
    public void deleteTutorialById(Long id) {

    }

    @Override
    public void deleteAllTutorials() {

    }

    @Override
    public List<TutorialResponse> getAllTutorials() {
        return List.of();
    }

    @Override
    public List<TutorialResponse> getTutorialPublished() {
        return List.of();
    }

    @Override
    public Boolean tutorialPublishedById(Long id) {
        return null;
    }

    @Override
    public Boolean tutorialUnPublishedById(Long id) {
        return null;
    }
}
