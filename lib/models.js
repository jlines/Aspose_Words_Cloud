exports.models = {
  "SectionLinkCollectionResponse": {
  "properties" : {
    "Sections" : {
      "$ref" : "SectionLinkCollection"
    },
    "Code" : {
      "type" : "string"
    },
    "Status" : {
      "type" : "string"
    }
  },
  "id" : "SectionLinkCollectionResponse"
},"TextEffect": {
  "id" : "TextEffect"
},"ParagraphResponse": {
  "properties" : {
    "Paragraph" : {
      "$ref" : "Paragraph"
    },
    "Code" : {
      "type" : "string"
    },
    "Status" : {
      "type" : "string"
    }
  },
  "id" : "ParagraphResponse"
},"ProtectionDataResponse": {
  "properties" : {
    "ProtectionData" : {
      "$ref" : "ProtectionData"
    },
    "DocumentLink" : {
      "$ref" : "Link"
    },
    "Code" : {
      "type" : "string"
    },
    "Status" : {
      "type" : "string"
    }
  },
  "id" : "ProtectionDataResponse"
},"LineStyle": {
  "id" : "LineStyle"
},"SectionLinkCollection": {
  "properties" : {
    "SectionLinkList" : {
      "type" : "array",
      "items" : {
        "$ref" : "SectionLink"
      }
    },
    "link" : {
      "$ref" : "Link"
    }
  },
  "id" : "SectionLinkCollection"
},"DrawingObjects": {
  "properties" : {
    "List" : {
      "type" : "array",
      "items" : {
        "$ref" : "LinkElement"
      }
    },
    "link" : {
      "$ref" : "Link"
    }
  },
  "id" : "DrawingObjects"
},"ProtectionRequest": {
  "properties" : {
    "Password" : {
      "type" : "string"
    },
    "NewPassword" : {
      "type" : "string"
    },
    "ProtectionType" : {
      "type" : "string"
    }
  },
  "id" : "ProtectionRequest"
},"TextItems": {
  "properties" : {
    "List" : {
      "type" : "array",
      "items" : {
        "$ref" : "TextItem"
      }
    },
    "link" : {
      "$ref" : "Link"
    }
  },
  "id" : "TextItems"
},"PageSetup": {
  "properties" : {
    "Bidi" : {
      "type" : "boolean"
    },
    "BorderAlwaysInFront" : {
      "type" : "boolean"
    },
    "BorderAppliesTo" : {
      "$ref" : "PageBorderAppliesTo"
    },
    "BorderDistanceFrom" : {
      "$ref" : "PageBorderDistanceFrom"
    },
    "BottomMargin" : {
      "$ref" : "double"
    },
    "DifferentFirstPageHeaderFooter" : {
      "type" : "boolean"
    },
    "FirstPageTray" : {
      "$ref" : "int"
    },
    "FooterDistance" : {
      "$ref" : "double"
    },
    "Gutter" : {
      "$ref" : "double"
    },
    "HeaderDistance" : {
      "$ref" : "double"
    },
    "LeftMargin" : {
      "$ref" : "double"
    },
    "LineNumberCountBy" : {
      "$ref" : "int"
    },
    "LineNumberDistanceFromText" : {
      "$ref" : "double"
    },
    "LineNumberRestartMode" : {
      "$ref" : "LineNumberRestartMode"
    },
    "LineStartingNumber" : {
      "$ref" : "int"
    },
    "Orientation" : {
      "$ref" : "Orientation"
    },
    "OtherPagesTray" : {
      "$ref" : "int"
    },
    "PageHeight" : {
      "$ref" : "double"
    },
    "PageNumberStyle" : {
      "$ref" : "NumberStyle"
    },
    "PageStartingNumber" : {
      "$ref" : "int"
    },
    "PageWidth" : {
      "$ref" : "double"
    },
    "PaperSize" : {
      "$ref" : "PaperSize"
    },
    "RestartPageNumbering" : {
      "type" : "boolean"
    },
    "RightMargin" : {
      "$ref" : "double"
    },
    "RtlGutter" : {
      "type" : "boolean"
    },
    "SectionStart" : {
      "$ref" : "SectionStart"
    },
    "SuppressEndnotes" : {
      "type" : "boolean"
    },
    "TopMargin" : {
      "$ref" : "double"
    },
    "VerticalAlignment" : {
      "$ref" : "PageVerticalAlignment"
    },
    "link" : {
      "$ref" : "Link"
    }
  },
  "id" : "PageSetup"
},"FormFieldResponse": {
  "properties" : {
    "FormField" : {
      "$ref" : "FormField"
    },
    "Code" : {
      "type" : "string"
    },
    "Status" : {
      "type" : "string"
    }
  },
  "id" : "FormFieldResponse"
},"LinkElement": {
  "properties" : {
    "link" : {
      "$ref" : "Link"
    }
  },
  "id" : "LinkElement"
},"ResponseMessage": {
  "properties" : {
    "Code" : {
      "$ref" : "int"
    },
    "Message" : {
      "type" : "string"
    }
  },
  "id" : "ResponseMessage"
},"Paragraph": {
  "properties" : {
    "ChildNodes" : {
      "type" : "array",
      "items" : {
        "$ref" : "object"
      }
    },
    "NodeId" : {
      "type" : "string"
    },
    "link" : {
      "$ref" : "Link"
    }
  },
  "id" : "Paragraph"
},"PaperSize": {
  "id" : "PaperSize"
},"FieldNamesResponse": {
  "properties" : {
    "FieldNames" : {
      "$ref" : "FieldNames"
    },
    "Code" : {
      "type" : "string"
    },
    "Status" : {
      "type" : "string"
    }
  },
  "id" : "FieldNamesResponse"
},"DrawingObjectsResponse": {
  "properties" : {
    "DrawingObjects" : {
      "$ref" : "DrawingObjects"
    },
    "Code" : {
      "type" : "string"
    },
    "Status" : {
      "type" : "string"
    }
  },
  "id" : "DrawingObjectsResponse"
},"DocumentStatData": {
  "properties" : {
    "WordCount" : {
      "$ref" : "int"
    },
    "ParagraphCount" : {
      "$ref" : "int"
    },
    "PageCount" : {
      "$ref" : "int"
    },
    "PageStatData" : {
      "type" : "array",
      "items" : {
        "$ref" : "PageStatData"
      }
    }
  },
  "id" : "DocumentStatData"
},"DocumentEntryList": {
  "properties" : {
    "DocumentEntries" : {
      "type" : "array",
      "items" : {
        "$ref" : "DocumentEntry"
      }
    }
  },
  "id" : "DocumentEntryList"
},"SaveOptionsData": {
  "properties" : {
    "SaveFormat" : {
      "type" : "string"
    },
    "FileName" : {
      "type" : "string"
    },
    "DmlRenderingMode" : {
      "type" : "string"
    },
    "DmlEffectsRenderingMode" : {
      "type" : "string"
    },
    "ZipOutput" : {
      "type" : "boolean"
    }
  },
  "id" : "SaveOptionsData"
},"HyperlinkResponse": {
  "properties" : {
    "Hyperlink" : {
      "$ref" : "Hyperlink"
    },
    "Code" : {
      "type" : "string"
    },
    "Status" : {
      "type" : "string"
    }
  },
  "id" : "HyperlinkResponse"
},"ReplaceTextRequest": {
  "properties" : {
    "OldValue" : {
      "type" : "string"
    },
    "NewValue" : {
      "type" : "string"
    },
    "IsMatchCase" : {
      "type" : "boolean"
    },
    "IsMatchWholeWord" : {
      "type" : "boolean"
    }
  },
  "id" : "ReplaceTextRequest"
},"HttpStatusCode": {
  "id" : "HttpStatusCode"
},"PageNumber": {
  "properties" : {
    "Format" : {
      "type" : "string"
    },
    "Alignment" : {
      "type" : "string"
    },
    "IsTop" : {
      "type" : "boolean"
    },
    "SetPageNumberOnFirstPage" : {
      "type" : "boolean"
    }
  },
  "id" : "PageNumber"
},"ProtectionData": {
  "properties" : {
    "ProtectionType" : {
      "type" : "string"
    }
  },
  "id" : "ProtectionData"
},"ModificationOperationResult": {
  "properties" : {
    "Source" : {
      "$ref" : "Link"
    },
    "Dest" : {
      "$ref" : "Link"
    }
  },
  "id" : "ModificationOperationResult"
},"Border": {
  "properties" : {
    "LineStyle" : {
      "$ref" : "LineStyle"
    },
    "LineWidth" : {
      "$ref" : "double"
    },
    "Color" : {
      "type" : "string"
    },
    "DistanceFromText" : {
      "$ref" : "double"
    },
    "Shadow" : {
      "type" : "boolean"
    }
  },
  "id" : "Border"
},"ParagraphLink": {
  "properties" : {
    "Text" : {
      "type" : "string"
    },
    "link" : {
      "$ref" : "Link"
    }
  },
  "id" : "ParagraphLink"
},"SaveResponse": {
  "properties" : {
    "SaveResult" : {
      "$ref" : "SaveResult"
    },
    "Code" : {
      "type" : "string"
    },
    "Status" : {
      "type" : "string"
    }
  },
  "id" : "SaveResponse"
},"DocumentPropertiesResponse": {
  "properties" : {
    "DocumentProperties" : {
      "$ref" : "DocumentProperties"
    },
    "Code" : {
      "type" : "string"
    },
    "Status" : {
      "type" : "string"
    }
  },
  "id" : "DocumentPropertiesResponse"
},"FormField": {
  "properties" : {
    "Name" : {
      "type" : "string"
    },
    "Enabled" : {
      "type" : "boolean"
    },
    "StatusText" : {
      "type" : "string"
    },
    "OwnStatus" : {
      "type" : "boolean"
    },
    "HelpText" : {
      "type" : "string"
    },
    "OwnHelp" : {
      "type" : "boolean"
    },
    "CalculateOnExit" : {
      "type" : "boolean"
    },
    "EntryMacro" : {
      "type" : "string"
    },
    "ExitMacro" : {
      "type" : "string"
    },
    "NodeId" : {
      "type" : "string"
    },
    "link" : {
      "$ref" : "Link"
    }
  },
  "id" : "FormField"
},"NumberStyle": {
  "id" : "NumberStyle"
},"BookmarkResponse": {
  "properties" : {
    "Bookmark" : {
      "$ref" : "Bookmark"
    },
    "Code" : {
      "type" : "string"
    },
    "Status" : {
      "type" : "string"
    }
  },
  "id" : "BookmarkResponse"
},"DocumentProperties": {
  "properties" : {
    "List" : {
      "type" : "array",
      "items" : {
        "$ref" : "DocumentProperty"
      }
    },
    "link" : {
      "$ref" : "Link"
    }
  },
  "id" : "DocumentProperties"
},"Color": {
  "properties" : {
    "R" : {
      "type" : "string"
    },
    "G" : {
      "type" : "string"
    },
    "B" : {
      "type" : "string"
    },
    "A" : {
      "type" : "string"
    },
    "IsKnownColor" : {
      "type" : "boolean"
    },
    "IsEmpty" : {
      "type" : "boolean"
    },
    "IsNamedColor" : {
      "type" : "boolean"
    },
    "IsSystemColor" : {
      "type" : "boolean"
    },
    "Name" : {
      "type" : "string"
    }
  },
  "id" : "Color"
},"SectionResponse": {
  "properties" : {
    "Section" : {
      "$ref" : "Section"
    },
    "Code" : {
      "type" : "string"
    },
    "Status" : {
      "type" : "string"
    }
  },
  "id" : "SectionResponse"
},"TextItem": {
  "properties" : {
    "Text" : {
      "type" : "string"
    },
    "link" : {
      "$ref" : "Link"
    }
  },
  "id" : "TextItem"
},"FieldNames": {
  "properties" : {
    "Names" : {
      "type" : "array",
      "items" : {
        "$ref" : "string"
      }
    },
    "link" : {
      "$ref" : "Link"
    }
  },
  "id" : "FieldNames"
},"String": {
  "properties" : {
    "Chars" : {
      "$ref" : "char"
    },
    "Length" : {
      "$ref" : "int"
    }
  },
  "id" : "String"
},"SectionStart": {
  "id" : "SectionStart"
},"Hyperlinks": {
  "properties" : {
    "HyperlinkList" : {
      "type" : "array",
      "items" : {
        "$ref" : "Hyperlink"
      }
    },
    "link" : {
      "$ref" : "Link"
    }
  },
  "id" : "Hyperlinks"
},"HttpResponseMessage": {
  "properties" : {
    "Content" : {
      "type" : "string"
    },
    "Headers" : {
      "type" : "string"
    },
    "IsSuccessStatusCode" : {
      "$ref" : "bool"
    },
    "ReasonPhrase" : {
      "type" : "string"
    },
    "RequestMessage" : {
      "type" : "string"
    },
    "StatusCode" : {
      "type" : "string"
    },
    "Version" : {
      "type" : "string"
    }
  },
  "id" : "HttpResponseMessage"
},"SectionLink": {
  "properties" : {
    "link" : {
      "$ref" : "Link"
    }
  },
  "id" : "SectionLink"
},"Bookmark": {
  "properties" : {
    "Name" : {
      "type" : "string"
    },
    "Text" : {
      "type" : "string"
    },
    "link" : {
      "$ref" : "Link"
    }
  },
  "id" : "Bookmark"
},"LoadWebDocumentData": {
  "properties" : {
    "LoadingDocumentUrl" : {
      "type" : "string"
    },
    "SaveOptions" : {
      "$ref" : "SaveOptionsData"
    }
  },
  "id" : "LoadWebDocumentData"
},"ParagraphLinkCollectionResponse": {
  "properties" : {
    "Paragraphs" : {
      "$ref" : "ParagraphLinkCollection"
    },
    "Code" : {
      "type" : "string"
    },
    "Status" : {
      "type" : "string"
    }
  },
  "id" : "ParagraphLinkCollectionResponse"
},"PageBorderAppliesTo": {
  "id" : "PageBorderAppliesTo"
},"DocumentEntry": {
  "properties" : {
    "Href" : {
      "type" : "string"
    },
    "ImportFormatMode" : {
      "type" : "string"
    }
  },
  "id" : "DocumentEntry"
},"RevisionsModificationResponse": {
  "properties" : {
    "Result" : {
      "$ref" : "ModificationOperationResult"
    },
    "Code" : {
      "type" : "string"
    },
    "Status" : {
      "type" : "string"
    }
  },
  "id" : "RevisionsModificationResponse"
},"DocumentFormat": {
  "id" : "DocumentFormat"
},"DocumentResponse": {
  "properties" : {
    "Document" : {
      "$ref" : "Document"
    },
    "Code" : {
      "type" : "string"
    },
    "Status" : {
      "type" : "string"
    }
  },
  "id" : "DocumentResponse"
},"StatDataResponse": {
  "properties" : {
    "StatData" : {
      "$ref" : "DocumentStatData"
    },
    "DocumentLink" : {
      "$ref" : "Link"
    },
    "Code" : {
      "type" : "string"
    },
    "Status" : {
      "type" : "string"
    }
  },
  "id" : "StatDataResponse"
},"BookmarksResponse": {
  "properties" : {
    "Bookmarks" : {
      "$ref" : "Bookmarks"
    },
    "Code" : {
      "type" : "string"
    },
    "Status" : {
      "type" : "string"
    }
  },
  "id" : "BookmarksResponse"
},"DocumentPropertyResponse": {
  "properties" : {
    "DocumentProperty" : {
      "$ref" : "DocumentProperty"
    },
    "Code" : {
      "type" : "string"
    },
    "Status" : {
      "type" : "string"
    }
  },
  "id" : "DocumentPropertyResponse"
},"PageBorderDistanceFrom": {
  "id" : "PageBorderDistanceFrom"
},"LineNumberRestartMode": {
  "id" : "LineNumberRestartMode"
},"ReportType": {
  "id" : "ReportType"
},"RunResponse": {
  "properties" : {
    "Run" : {
      "$ref" : "Run"
    },
    "Code" : {
      "type" : "string"
    },
    "Status" : {
      "type" : "string"
    }
  },
  "id" : "RunResponse"
},"TextItemsResponse": {
  "properties" : {
    "TextItems" : {
      "$ref" : "TextItems"
    },
    "Code" : {
      "type" : "string"
    },
    "Status" : {
      "type" : "string"
    }
  },
  "id" : "TextItemsResponse"
},"Font": {
  "properties" : {
    "AllCaps" : {
      "type" : "boolean"
    },
    "Bidi" : {
      "type" : "boolean"
    },
    "Bold" : {
      "type" : "boolean"
    },
    "BoldBi" : {
      "type" : "boolean"
    },
    "Border" : {
      "$ref" : "Border"
    },
    "Color" : {
      "type" : "string"
    },
    "ComplexScript" : {
      "type" : "boolean"
    },
    "DoubleStrikeThrough" : {
      "type" : "boolean"
    },
    "Emboss" : {
      "type" : "boolean"
    },
    "Engrave" : {
      "type" : "boolean"
    },
    "Hidden" : {
      "type" : "boolean"
    },
    "HighlightColor" : {
      "type" : "string"
    },
    "Italic" : {
      "type" : "boolean"
    },
    "ItalicBi" : {
      "type" : "boolean"
    },
    "Kerning" : {
      "$ref" : "double"
    },
    "LocaleId" : {
      "$ref" : "int"
    },
    "LocaleIdBi" : {
      "$ref" : "int"
    },
    "LocaleIdFarEast" : {
      "$ref" : "int"
    },
    "Name" : {
      "type" : "string"
    },
    "NameAscii" : {
      "type" : "string"
    },
    "NameBi" : {
      "type" : "string"
    },
    "NameFarEast" : {
      "type" : "string"
    },
    "NameOther" : {
      "type" : "string"
    },
    "NoProofing" : {
      "type" : "boolean"
    },
    "Outline" : {
      "type" : "boolean"
    },
    "Position" : {
      "$ref" : "double"
    },
    "Scaling" : {
      "$ref" : "int"
    },
    "Shadow" : {
      "type" : "boolean"
    },
    "Size" : {
      "$ref" : "double"
    },
    "SizeBi" : {
      "$ref" : "double"
    },
    "SmallCaps" : {
      "type" : "boolean"
    },
    "Spacing" : {
      "$ref" : "double"
    },
    "StrikeThrough" : {
      "type" : "boolean"
    },
    "StyleIdentifier" : {
      "$ref" : "StyleIdentifier"
    },
    "StyleName" : {
      "type" : "string"
    },
    "Subscript" : {
      "type" : "boolean"
    },
    "Superscript" : {
      "type" : "boolean"
    },
    "TextEffect" : {
      "$ref" : "TextEffect"
    },
    "Underline" : {
      "$ref" : "Underline"
    },
    "UnderlineColor" : {
      "type" : "string"
    },
    "link" : {
      "$ref" : "Link"
    }
  },
  "id" : "Font"
},"Bookmarks": {
  "properties" : {
    "BookmarkList" : {
      "type" : "array",
      "items" : {
        "$ref" : "Bookmark"
      }
    },
    "link" : {
      "$ref" : "Link"
    }
  },
  "id" : "Bookmarks"
},"Underline": {
  "id" : "Underline"
},"ReplaceTextResponse": {
  "properties" : {
    "Matches" : {
      "$ref" : "int"
    },
    "DocumentLink" : {
      "$ref" : "Link"
    },
    "Code" : {
      "type" : "string"
    },
    "Status" : {
      "type" : "string"
    }
  },
  "id" : "ReplaceTextResponse"
},"ParagraphLinkCollection": {
  "properties" : {
    "ParagraphLinkList" : {
      "type" : "array",
      "items" : {
        "$ref" : "ParagraphLink"
      }
    },
    "link" : {
      "$ref" : "Link"
    }
  },
  "id" : "ParagraphLinkCollection"
},"Run": {
  "properties" : {
    "Text" : {
      "type" : "string"
    },
    "NodeId" : {
      "type" : "string"
    },
    "link" : {
      "$ref" : "Link"
    }
  },
  "id" : "Run"
},"SplitDocumentResult": {
  "properties" : {
    "SourceDocument" : {
      "$ref" : "Link"
    },
    "Pages" : {
      "type" : "array",
      "items" : {
        "$ref" : "Link"
      }
    },
    "ZippedPages" : {
      "$ref" : "Link"
    }
  },
  "id" : "SplitDocumentResult"
},"Object": {
  "id" : "Object"
},"Hyperlink": {
  "properties" : {
    "DisplayText" : {
      "type" : "string"
    },
    "Value" : {
      "type" : "string"
    },
    "link" : {
      "$ref" : "Link"
    }
  },
  "id" : "Hyperlink"
},"PageStatData": {
  "properties" : {
    "PageNumber" : {
      "$ref" : "int"
    },
    "WordCount" : {
      "$ref" : "int"
    },
    "ParagraphCount" : {
      "$ref" : "int"
    }
  },
  "id" : "PageStatData"
},"Document": {
  "properties" : {
    "Links" : {
      "type" : "array",
      "items" : {
        "$ref" : "Link"
      }
    },
    "FileName" : {
      "type" : "string"
    },
    "SourceFormat" : {
      "$ref" : "DocumentFormat"
    },
    "IsEncrypted" : {
      "type" : "boolean"
    },
    "IsSigned" : {
      "type" : "boolean"
    },
    "DocumentProperties" : {
      "$ref" : "DocumentProperties"
    }
  },
  "id" : "Document"
},"SaveResult": {
  "properties" : {
    "SourceDocument" : {
      "$ref" : "Link"
    },
    "DestDocument" : {
      "$ref" : "Link"
    },
    "AdditionalItems" : {
      "type" : "array",
      "items" : {
        "$ref" : "Link"
      }
    }
  },
  "id" : "SaveResult"
},"Orientation": {
  "id" : "Orientation"
},"MetafileRenderingOptionsData": {
  "properties" : {
    "EmfPlusDualRenderingMode" : {
      "type" : "string"
    },
    "RenderingMode" : {
      "type" : "string"
    },
    "UseEmfEmbeddedToWmf" : {
      "type" : "boolean"
    }
  },
  "id" : "MetafileRenderingOptionsData"
},"PageVerticalAlignment": {
  "id" : "PageVerticalAlignment"
},"StyleIdentifier": {
  "id" : "StyleIdentifier"
},"SplitDocumentResponse": {
  "properties" : {
    "SplitResult" : {
      "$ref" : "SplitDocumentResult"
    },
    "Code" : {
      "type" : "string"
    },
    "Status" : {
      "type" : "string"
    }
  },
  "id" : "SplitDocumentResponse"
},"DocumentProperty": {
  "properties" : {
    "Name" : {
      "type" : "string"
    },
    "Value" : {
      "type" : "string"
    },
    "BuiltIn" : {
      "type" : "boolean"
    },
    "link" : {
      "$ref" : "Link"
    }
  },
  "id" : "DocumentProperty"
},"Section": {
  "properties" : {
    "Paragraphs" : {
      "$ref" : "LinkElement"
    },
    "PageSetup" : {
      "$ref" : "LinkElement"
    },
    "link" : {
      "$ref" : "Link"
    }
  },
  "id" : "Section"
},"HyperlinksResponse": {
  "properties" : {
    "Hyperlinks" : {
      "$ref" : "Hyperlinks"
    },
    "Code" : {
      "type" : "string"
    },
    "Status" : {
      "type" : "string"
    }
  },
  "id" : "HyperlinksResponse"
},"Link": {
  "properties" : {
    "Href" : {
      "type" : "string"
    },
    "Rel" : {
      "type" : "string"
    },
    "Type" : {
      "type" : "string"
    },
    "Title" : {
      "type" : "string"
    }
  },
  "id" : "Link"
},"BookmarkData": {
  "properties" : {
    "Name" : {
      "type" : "string"
    },
    "Text" : {
      "type" : "string"
    }
  },
  "id" : "BookmarkData"
},"TiffSaveOptionsData": {
  "properties" : {
    "TiffBinarizationMethod" : {
      "type" : "string"
    },
    "TiffCompression" : {
      "type" : "string"
    },
    "PageCount" : {
      "$ref" : "int"
    },
    "PixelFormat" : {
      "type" : "string"
    },
    "PaperColor" : {
      "type" : "string"
    },
    "Resolution" : {
      "$ref" : "float"
    },
    "Scale" : {
      "$ref" : "float"
    },
    "ImageBrightness" : {
      "$ref" : "float"
    },
    "ImageColorMode" : {
      "type" : "string"
    },
    "ImageContrast" : {
      "$ref" : "float"
    },
    "UseHighQualityRendering" : {
      "type" : "boolean"
    },
    "UseAntiAliasing" : {
      "type" : "boolean"
    },
    "PageIndex" : {
      "$ref" : "int"
    },
    "MetafileRenderingOptions" : {
      "$ref" : "MetafileRenderingOptionsData"
    },
    "NumeralFormat" : {
      "type" : "string"
    },
    "SaveFormat" : {
      "type" : "string"
    },
    "FileName" : {
      "type" : "string"
    },
    "DmlRenderingMode" : {
      "type" : "string"
    },
    "DmlEffectsRenderingMode" : {
      "type" : "string"
    },
    "ZipOutput" : {
      "type" : "boolean"
    }
  },
  "id" : "TiffSaveOptionsData"
},"WatermarkText": {
  "properties" : {
    "Text" : {
      "type" : "string"
    },
    "RotationAngle" : {
      "$ref" : "double"
    }
  },
  "id" : "WatermarkText"
},"SaaSposeResponse": {
  "properties" : {
    "Code" : {
      "type" : "string"
    },
    "Status" : {
      "type" : "string"
    }
  },
  "id" : "SaaSposeResponse"
},"SectionPageSetupResponse": {
  "properties" : {
    "PageSetup" : {
      "$ref" : "PageSetup"
    },
    "Code" : {
      "type" : "string"
    },
    "Status" : {
      "type" : "string"
    }
  },
  "id" : "SectionPageSetupResponse"
},"FontResponse": {
  "properties" : {
    "Font" : {
      "$ref" : "Font"
    },
    "Code" : {
      "type" : "string"
    },
    "Status" : {
      "type" : "string"
    }
  },
  "id" : "FontResponse"
}
}