package com.adobe.aem.guides.wknd.spa.react.core.models.impl;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import com.adobe.aem.guides.wknd.spa.react.core.models.titletextdescription;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;



@Model(adaptables = SlingHttpServletRequest.class, adapters = { titletextdescription.class,

        ComponentExporter.class }, resourceType = titletextdescriptionImpl.SLING_SERVLET_RESOURCE_TYPES, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)

@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)

public class titletextdescriptionImpl implements titletextdescription {


    static final String SLING_SERVLET_RESOURCE_TYPES = "wknd-spa-react/components/customized-components/titletextdescription";



    @ValueMapValue
    private String title;

    @Override
     public String getTitle() {
    return title;
     }


    @ValueMapValue
    private String text;

    @Override
    public String getText() {
     return text;

    }



    @ValueMapValue
    private String description;

    @Override
    public String getDescription() {
    return  description;

    }



    @Override

    public String getExportedType() {
 return titletextdescriptionImpl.SLING_SERVLET_RESOURCE_TYPES;

    }



}