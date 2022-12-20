package com.adobe.aem.guides.wknd.spa.react.core.models;



import com.adobe.cq.export.json.ComponentExporter;

public interface MyProduct extends ComponentExporter{
    
    public String getSrc();
    public String getDateTillOffer();
    public String getProductTitle();
    public String getProductDescription();
    public String getProductPrice();
    public String getOfferName();
    public String getOfferDetails();
    public boolean getIsInOfferPeriod();


}
