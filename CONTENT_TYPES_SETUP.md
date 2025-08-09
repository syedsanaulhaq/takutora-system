# Takutora Business Content Types Setup Guide

## 🏗️ Content Types for Business Workflow

Based on your workflow diagram, here are the content types to create in Drupal:

### 1. Client Profile Content Type

**Go to**: https://takutora.ddev.site/admin/structure/types/add

**Content Type Settings:**
- **Name**: Client Profile
- **Machine name**: client_profile
- **Description**: Profile information for clients including business details and contact information

**Fields to Add:**
```
1. Company Name (Text - required)
2. Contact Person (Text - required)
3. Email Address (Email - required)
4. Phone Number (Text)
5. Business Address (Text - Long)
6. Company Size (List - Small/Medium/Large/Enterprise)
7. Industry Type (Text)
8. Registration Date (Date)
9. Client Status (List - Active/Inactive/Pending)
10. Notes (Text - Long, formatted)
```

### 2. Business Plan Content Type

**Go to**: https://takutora.ddev.site/admin/structure/types/add

**Content Type Settings:**
- **Name**: Business Plan
- **Machine name**: business_plan
- **Description**: Different service plans with pricing and specifications

**Fields to Add:**
```
1. Plan Name (Text - required)
2. Plan Type (List - Basic/Standard/Premium/Enterprise)
3. Plan Description (Text - Long, formatted)
4. Base Price (Number - decimal)
5. Monthly Price (Number - decimal)
6. Setup Fee (Number - decimal)
7. Box Quantity Included (Number - integer)
8. Features List (Text - Long)
9. Plan Status (List - Active/Inactive/Coming Soon)
10. Plan Image (Image)
```

### 3. Box Specification Content Type

**Go to**: https://takutora.ddev.site/admin/structure/types/add

**Content Type Settings:**
- **Name**: Box Specification
- **Machine name**: box_specification
- **Description**: Detailed specifications for boxes and customization options

**Fields to Add:**
```
1. Box Name (Text - required)
2. Box Type (List - Small/Medium/Large/Custom)
3. Dimensions (Text - Length x Width x Height)
4. Weight Capacity (Number - decimal)
5. Material Type (List - Cardboard/Plastic/Metal)
6. Color Options (Text)
7. Custom Branding (Boolean - Yes/No)
8. Price per Unit (Number - decimal)
9. Minimum Order Quantity (Number - integer)
10. Box Image (Image)
```

### 4. Client Order Content Type

**Go to**: https://takutora.ddev.site/admin/structure/types/add

**Content Type Settings:**
- **Name**: Client Order
- **Machine name**: client_order
- **Description**: Orders placed by clients with complete tracking and status

**Fields to Add:**
```
1. Order Number (Text - required, auto-generated)
2. Client Reference (Entity Reference - Client Profile)
3. Selected Plan (Entity Reference - Business Plan)
4. Box Specifications (Entity Reference - Box Specification, multiple)
5. Order Date (Date - required)
6. Required Delivery Date (Date)
7. Quantity (Number - integer)
8. Total Amount (Number - decimal)
9. Order Status (List - Pending/Confirmed/In Production/Shipped/Delivered/Cancelled)
10. Shipping Address (Text - Long)
11. Special Instructions (Text - Long)
12. Staff Notes (Text - Long, admin only)
```

## 🚀 Quick Setup Steps

1. **Login to Drupal Admin**: https://takutora.ddev.site/admin (admin/admin)

2. **Navigate to Content Types**: Structure → Content Types

3. **Create Each Content Type** using the specifications above

4. **Configure JSON:API** for each content type:
   - Go to Configuration → Web Services → JSON:API
   - Enable each content type for API access

5. **Set Permissions**:
   - Go to People → Permissions
   - Configure who can create/edit each content type

## 🔧 After Creating Content Types

### Test the API Endpoints:
- **Client Profiles**: `/jsonapi/node/client_profile`
- **Business Plans**: `/jsonapi/node/business_plan`
- **Box Specifications**: `/jsonapi/node/box_specification`
- **Client Orders**: `/jsonapi/node/client_order`

### Create Sample Content:
1. Create a few sample business plans
2. Create test client profiles
3. Create sample box specifications
4. Create test orders

This will give you the foundation for the entire business workflow system!

## 📝 Next Steps After Setup
1. Create sample content for testing
2. Update React frontend to consume these new APIs
3. Build registration and order forms
4. Implement business logic and validation

---
**Ready to build the business workflow!** 🎯
