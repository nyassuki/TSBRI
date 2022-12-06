# Misc

```ts
const miscController = new MiscController(client);
```

## Class Name

`MiscController`

## Methods

* [Get Token](../../doc/controllers/misc.md#get-token)
* [Account Information](../../doc/controllers/misc.md#account-information)


# Get Token

First endpoint to hit before making request to other endpoint in BRIAPI

```ts
async getToken(
  grantType: string,
  clientId: string,
  clientSecret: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Success>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `grantType` | `string` | Query, Required | - |
| `clientId` | `string` | Form, Required | - |
| `clientSecret` | `string` | Form, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Success`](../../doc/models/success.md)

## Example Usage

```ts
const grantType = 'client_credentials';
const contentType = null;
const clientId = '{{id_key}}';
const clientSecret = '{{secret_key}}';
try {
  const { result, ...httpResponse } = await miscController.getToken(grantType, clientId, clientSecret);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "refresh_token_expires_in": "0",
  "api_product_list": "[inquiry-sandbox]",
  "api_product_list_json": [
    "inquiry-sandbox"
  ],
  "organization_name": "bri",
  "developer.email": "furkorsan.gantheng@xyz.com",
  "token_type": "BearerToken",
  "issued_at": "1557891212144",
  "client_id": "8E20dpP7KtakFkShw5tQHOFf7FFAU01o",
  "access_token": "R04XSUbnm1GXNmDiXx9ysWMpFWBr",
  "application_name": "317d0b2f-6536-4cac-a5f0-3bc9908815b3",
  "scope": "",
  "expires_in": "179999",
  "refresh_count": "0",
  "status": "approved"
}
```


# Account Information

API endpoint to get account information and balance

```ts
async accountInformation(
  bRISignature: string,
  bRITimestamp: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bRISignature` | `string` | Header, Required | - |
| `bRITimestamp` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const bRISignature = '{{signature}}';
const bRITimestamp = '{{timestamp}}';
try {
  const { result, ...httpResponse } = await miscController.accountInformation(bRISignature, bRITimestamp);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

