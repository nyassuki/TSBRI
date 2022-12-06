/**
 * BRIAPI_collection copyLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for OAuthProviderErrorEnum
 */
export enum OAuthProviderErrorEnum {
  InvalidRequest = 'invalid_request',
  InvalidClient = 'invalid_client',
  InvalidGrant = 'invalid_grant',
  UnauthorizedClient = 'unauthorized_client',
  UnsupportedGrantType = 'unsupported_grant_type',
  InvalidScope = 'invalid_scope',
}

/**
 * Schema for OAuthProviderErrorEnum
 */
export const oAuthProviderErrorEnumSchema: Schema<OAuthProviderErrorEnum> = stringEnum(OAuthProviderErrorEnum);
