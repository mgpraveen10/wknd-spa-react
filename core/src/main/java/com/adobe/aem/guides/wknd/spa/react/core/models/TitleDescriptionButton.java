package com.adobe.aem.guides.wknd.spa.react.core.models;



import com.adobe.cq.export.json.ComponentExporter;

public interface TitleDescriptionButton extends ComponentExporter {

    public String getTitle();
   
    public String getDescription();

    public String getButtonName();
    
    public String getButtonLink();
    
    public String getButtonPosition();

    public Boolean getBadge();

    
    



}