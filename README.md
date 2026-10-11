# 🛒 BazarDor — Bangladesh Market Price Tracker

**BazarDor** is a modern, responsive web application designed to help users track the latest market prices of essential commodities in Bangladesh. It provides product pricing information, daily price change indicators, and market-wise price analysis through a clean and user-friendly interface.

The goal of BazarDor is to make market price information easily accessible, helping users compare prices and stay informed about daily market trends.

---

## 🌐 Live Demo

* **Live Site:** [bazer-dor.vercel.app](#)
* **GitHub Repository:** [https://github.com/Pranto779/Bazer_Dor](#)

---

## 🛠️ Technologies Used

| Technology           | Purpose                                |
| -------------------- | -------------------------------------- |
| Next.js (App Router) | Full-stack React framework             |
| React.js             | Building interactive user interfaces   |
| TypeScript           | Type safety and better code quality    |
| Tailwind CSS         | Responsive styling and UI design       |
| HeroUI / DaisyUI     | UI components and styling              |
| Better Auth          | Authentication and session management  |
| React Hot Toast      | Toast notifications                    |
| MongoDB              | Database for storing application data  |
| Vercel               | Application deployment and hosting     |
| Git & GitHub         | Version control and project management |

---

## ✨ Key Features

### 1. 📊 Daily Market Price Tracking

* Displays the latest prices of essential commodities.
* Highlights daily price increases and decreases.
* Supports Bengali price formatting.
* Helps users understand daily market trends.

### 2. 🗂️ Category-Based Product Browsing

* Browse products by category.
* Dedicated pages for individual product categories.
* Active category highlighting in the navigation menu.
* Easy navigation between categories and products.

### 3. 🔐 Secure Authentication System

* Email and password authentication.
* Google authentication.
* GitHub authentication.
* Protected product details routes.
* Session management with Better Auth.

### 4. 📈 Product Details & Market Analysis

* Dedicated product details pages.
* Minimum, maximum, and average price summaries.
* Market-wise daily pricing information.
* Detailed product information for better price comparisons.

### 5. ↕️ Product Sorting

* Default product sorting.
* Price: Low to High.
* Price: High to Low.
* URL-based sorting for easier navigation and state management.

### 6. 📱 Fully Responsive Design

* Mobile-friendly interface.
* Tablet-responsive layouts.
* Desktop-optimized experience.
* Consistent design across different screen sizes.

### 7. ⚡ Enhanced User Experience

* Price ticker and marquee section.
* Skeleton loading states.
* Toast notifications for user feedback.
* Smooth navigation between pages.
* User-friendly empty states.
* Custom 404 error page.

### 8. 👤 User Profile Management

* View user profile information.
* Update the user's name using Better Auth.
* Display user information in the profile section.
* Easy access to account-related features.

---

## 📄 Application Pages

### 🏠 Home Page

* Responsive navbar
* Category navigation
* Price ticker
* Hero banner
* Top price risers section
* Top price fallers section
* All products section
* Footer

### 🗂️ Category Page

* Category information
* Category-based product listing
* Product sorting controls
* Skeleton loading states
* Empty state handling

### 📦 Product Details Page

* Protected product details route
* Product overview
* Minimum, maximum, and average price summary
* Market-based pricing information
* Daily price comparison

### 🔑 Authentication Pages

* Sign-in page
* Sign-up page
* Email and password authentication
* Google social login
* GitHub social login
* Toast notifications

### 👤 Profile Page

* User information
* Profile details
* Profile update functionality
* Account management

### 🚫 Custom 404 Page

* Custom error page design
* Friendly error message
* Return to Home button

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── category/
│   │   ├── page.tsx
│   │   └── product/
│   │       └── [productId]/
│   │           └── page.tsx
│   ├── signin/
│   │   └── page.tsx
│   ├── signup/
│   │   └── page.tsx
│   └── profile/
│       └── page.tsx
├── components/
├── lib/
├── types/
└── ...
```

> **Note:** Adjust the project structure above to match your actual directory and file names.

---

## ⚙️ Installation & Setup

Follow these steps to run BazarDor locally.

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm, yarn, pnpm, or bun
* Git
* A MongoDB database, if required by your configuration

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project Directory

```bash
cd bazardor
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory and add the environment variables required by your application.

```env
DATABASE_URL=your_database_connection_string
BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000
```

> Add any additional environment variables required by your Better Auth configuration, social login providers, and database setup. Use the exact variable names expected by your application. Never commit real secrets to GitHub.

### 5. Start the Development Server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

---

## 🚀 Deployment

BazarDor can be deployed using **Vercel**.

1. Push your project to GitHub.
2. Import the repository into Vercel.
3. Configure the required environment variables.
4. Deploy the application.
5. Open your live website and verify that all features work correctly.

---

## 🎯 Project Goals

The main goals of BazarDor are to:

* Make essential commodity prices easier to access.
* Help users compare prices across different markets.
* Present daily price changes in a clear and understandable way.
* Provide a smooth experience across mobile, tablet, and desktop devices.
* Offer secure authentication and personalized profile management.

---

## 🔮 Future Improvements

* Historical price charts and market trends.
* Advanced product search and filtering.
* Market location-based price comparisons.
* Daily price update notifications.
* User-favorite products.
* Improved analytics and reporting.

---

## 👨‍💻 Author

**Your Name**

* **GitHub:** [Your GitHub Profile](#)
* **LinkedIn:** [Your LinkedIn Profile](#)

---

## 📜 License

This project is developed for educational and demonstration purposes. Add an appropriate open-source license if you intend to distribute the project publicly.

---

⭐ **If you find BazarDor useful, consider giving the repository a star!**

**BazarDor — Know the Price. Compare the Market.**
