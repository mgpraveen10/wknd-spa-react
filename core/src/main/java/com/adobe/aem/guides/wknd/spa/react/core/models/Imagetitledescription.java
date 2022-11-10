package com.adobe.aem.guides.wknd.spa.react.core.models;



import com.adobe.cq.export.json.ComponentExporter;

public interface Imagetitledescription extends ComponentExporter {

    public String getTitle();
    public String getImagelink();
    public String getDescription();
    public String getPosition();
    
    


}