import * as TypeGraphQL from '@nestjs/graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { NestedIntFilter } from './NestedIntFilter';
import { NestedStringFilter } from './NestedStringFilter';

@TypeGraphQL.InputType('NestedStringWithAggregatesFilter', {
  isAbstract: true,
})
export class NestedStringWithAggregatesFilter {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  equals?: string | undefined;

  @TypeGraphQL.Field((_type) => [String], {
    nullable: true,
  })
  in?: string[] | undefined;

  @TypeGraphQL.Field((_type) => [String], {
    nullable: true,
  })
  notIn?: string[] | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  lt?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  lte?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  gt?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  gte?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  contains?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  startsWith?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  endsWith?: string | undefined;

  @TypeGraphQL.Field((_type) => NestedStringWithAggregatesFilter, {
    nullable: true,
  })
  not?: NestedStringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => NestedIntFilter, {
    nullable: true,
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field((_type) => NestedStringFilter, {
    nullable: true,
  })
  _min?: NestedStringFilter | undefined;

  @TypeGraphQL.Field((_type) => NestedStringFilter, {
    nullable: true,
  })
  _max?: NestedStringFilter | undefined;
}