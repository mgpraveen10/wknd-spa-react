package com.adobe.aem.guides.wknd.spa.react.core.models.impl;



import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.adobe.aem.guides.wknd.spa.react.core.models.MyProduct;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;

@Model(
    adaptables = SlingHttpServletRequest.class,
    adapters = {MyProduct.class,ComponentExporter.class},
    resourceType = MyProductImpl.RESOURCE_TYPE,
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class MyProductImpl implements MyProduct{

   static final String RESOURCE_TYPE="wknd-spa-react/components/customized-components/product";

   @ValueMapValue
   private String fileReference;

   @ValueMapValue
    private boolean isInOfferPeriod;
   @ValueMapValue
    private String offerDetails;
   @ValueMapValue
    private String offerName;
   @ValueMapValue
    private String productPrice;
   @ValueMapValue
    private String productTitle;
   @ValueMapValue
    private String productDescription;
   @ValueMapValue
    private String dateTillOffer;

    @Override
    public String getSrc() {
        
        return fileReference;
    }

    @Override
    public String getDateTillOffer() {
       
        return dateTillOffer;
    }

   

    @Override
    public String getProductTitle() {
        return productTitle;
    }

    @Override
    public String getProductDescription() {
       
        return productDescription;
    }

    @Override
    public String getProductPrice() {
        return productPrice;
    }

    @Override
    public String getOfferName() {
        return offerName;
    }

    @Override
    public String getOfferDetails() {
        return offerDetails;
    }

    @Override
    public boolean getIsInOfferPeriod() {
        return isInOfferPeriod;
    }

    @Override
    public String getExportedType() {
        
        return MyProductImpl.RESOURCE_TYPE;
    }

   
    
}
