package com.adobe.aem.guides.wknd.spa.react.core.models.impl;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import com.adobe.aem.guides.wknd.spa.react.core.models.TitleDescriptionButton;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;

// @Model(
// adaptables=SlingHttpServletRequest.class , 
// adapters={TitleDescriptionButton.class,ComponentExporter.class},
// resourceType=TitleDescriptionButtonImpl.SLING_SERVLET_RESOURCE_TYPES,
// defaultInjectionStrategy=DefaultInjectionStrategy.OPTIONAL
// )

// @Exporter(
//     name=ExporterConstants.SLING_MODEL_EXPORTER_NAME,
//     extensions = ExporterConstants.SLING_MODEL_EXTENSION
// )

@Model(adaptables = SlingHttpServletRequest.class, 
adapters = { TitleDescriptionButton.class,
 ComponentExporter.class },
         resourceType = TitleDescriptionButtonImpl.SLING_SERVLET_RESOURCE_TYPES,
          defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)

@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, 
extensions = ExporterConstants.SLING_MODEL_EXTENSION)


public class TitleDescriptionButtonImpl implements TitleDescriptionButton
{
 static final String SLING_SERVLET_RESOURCE_TYPES = "wknd-spa-react/components/customized-components/tdlinkname";

@ValueMapValue
    private String title;

    @Override
     public String getTitle() {
    return title;
     }



 @ValueMapValue
    private String description;

    @Override
    public String getDescription() {
    return  description;
}

@ValueMapValue
    private String buttonlinkname;

    @Override
     public String getButtonName() {
    return buttonlinkname;
     }



@ValueMapValue
    private String buttonlink;

    @Override
     public String getButtonLink() {
    return buttonlink;
     }

@ValueMapValue
    private String buttonposition;

    @Override
     public String getButtonPosition() {
    return buttonposition;
     }

@ValueMapValue
    private Boolean badge;

    @Override
     public Boolean getBadge() {
    return badge;
     }



 @Override

    public String getExportedType() {
 return TitleDescriptionButtonImpl.SLING_SERVLET_RESOURCE_TYPES;

    }


}