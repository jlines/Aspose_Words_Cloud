#import <Foundation/Foundation.h>
#import "ASPObject.h"

/**
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */

#import "ASPSectionLink.h"
#import "ASPLink.h"


@protocol ASPSectionLinkCollection
@end

@interface ASPSectionLinkCollection : ASPObject


@property(nonatomic) NSArray<ASPSectionLink>* sectionLinkList;

@property(nonatomic) ASPLink* link;

@end
