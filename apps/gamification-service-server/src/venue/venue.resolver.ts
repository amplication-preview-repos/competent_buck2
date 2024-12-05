import * as graphql from "@nestjs/graphql";
import { VenueResolverBase } from "./base/venue.resolver.base";
import { Venue } from "./base/Venue";
import { VenueService } from "./venue.service";

@graphql.Resolver(() => Venue)
export class VenueResolver extends VenueResolverBase {
  constructor(protected readonly service: VenueService) {
    super(service);
  }
}
