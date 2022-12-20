package com.adobe.aem.guides.wknd.spa.react.core.models;



import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import java.util.Collection;
import javax.annotation.PostConstruct;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;





@Model(adaptables = SlingHttpServletRequest.class, adapters = { ComponentExporter.class,
    ProfiletitleImpl.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL, resourceType = ProfiletitleImpl.RESOURCE_TYPE)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)


   

public class ProfiletitleImpl  implements ComponentExporter  {
    final static String RESOURCE_TYPE = "wknd-spa-react/components/customized-components/profiletitle";

    @ChildResource(name = "items1")
    Collection<Profiletitleget> items1;

    @PostConstruct
    protected void init() {
        items1 = CollectionUtils.emptyIfNull(this.items1);
    }

    public Collection<Profiletitleget> getItems1() {
        return items1;
    }

    @Override
    public String getExportedType() {
        
        return ProfiletitleImpl.RESOURCE_TYPE;
    }
    
}
