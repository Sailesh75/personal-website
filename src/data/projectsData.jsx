/**
 * projectsData.jsx
 * ----------------
 * Contains an array of project objects.
 * Each project includes metadata (id, title, thumbnail, links, details, visualizations).
 * This data is rendered dynamically in the ProjectCard component.
 */

export const projectsData = [ {
    id: 'customer-churn-prediction',
    title: 'Customer Churn Prediction',
    category: 'Machine Learning',
    shortDescription: 'Built an ML model to predict customer churn for a telecom company.',
    thumbnail: 'https://placehold.co/400x250/B8C2CC/333333?text=Churn+Prediction', // Placeholder image
    githubLink: 'https://github.com/your-github/customer-churn-prediction',
    liveDemoLink: '#', // If you have a deployed demo
    details: {
      problem: 'A telecommunications company was experiencing significant customer churn, leading to revenue loss. The goal was to identify customers at high risk of churning to enable proactive retention strategies.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
      methodology: [
        '**Data Collection & Cleaning:** Gathered data from various sources (customer demographics, service usage, billing information). Handled missing values, outliers, and categorical encoding.',
        '**Exploratory Data Analysis (EDA):** Performed in-depth analysis to understand customer behavior patterns and identify potential churn drivers. Visualizations revealed correlations between churn and factors like contract type, internet service, and monthly charges.',
        '**Feature Engineering:** Created new features like "tenure groups" and "total charges per month" to improve model performance.',
        '**Model Development:** Explored several classification algorithms including Logistic Regression, Random Forest, and Gradient Boosting. Utilized cross-validation for robust evaluation.',
        '**Model Evaluation:** Assessed models using metrics such as accuracy, precision, recall, F1-score, and ROC-AUC. Optimized hyperparameters using GridSearchCV.',
        '**Interpretation & Insights:** Identified key features influencing churn, such as month-to-month contracts, lack of online security, and higher monthly charges. Provided actionable insights for targeted marketing campaigns.',
      ],
      results: 'The final Gradient Boosting Classifier achieved an accuracy of 88% and an F1-score of 0.82 on the test set, demonstrating strong predictive capability. The model successfully identified at-risk customers with high precision, allowing the company to implement effective retention programs.',
      visualizations: [
        {
          src: 'https://placehold.co/600x400/DDE4E9/333333?text=Churn+Distribution+Chart',
          alt: 'Churn Distribution Chart',
          caption: 'Distribution of Churn vs. Non-Churn Customers'
        },
        {
          src: 'https://placehold.co/600x400/DDE4E9/333333?text=Feature+Importance+Plot',
          alt: 'Feature Importance Plot',
          caption: 'Feature Importance for Churn Prediction Model'
        }
      ]
    }
  },
  {
    id: 'sales-forecasting',
    title: 'Retail Sales Forecasting',
    category: 'Time Series Analysis',
    shortDescription: 'Developed a time series model to forecast retail sales for a clothing brand.',
    thumbnail: 'https://placehold.co/400x250/C7D0DA/333333?text=Sales+Forecasting', // Placeholder image
    githubLink: 'https://github.com/your-github/retail-sales-forecasting',
    liveDemoLink: '#',
    details: {
      problem: 'A retail clothing brand struggled with inventory management due to unpredictable sales patterns. The objective was to build a robust sales forecasting model to optimize stock levels and reduce waste.',
      technologies: ['Python', 'Pandas', 'Statsmodels', 'Prophet', 'Plotly'],
      methodology: [
        '**Data Preprocessing:** Cleaned and aggregated historical sales data, handling missing dates and ensuring consistent time intervals.',
        '**Time Series Analysis:** Performed decomposition (trend, seasonality, residuals) and stationarity tests. Identified weekly and yearly seasonal patterns.',
        '**Model Selection:** Evaluated ARIMA, SARIMA, and Facebook Prophet models based on their performance on historical data and ability to capture complex seasonality.',
        '**Model Training & Evaluation:** Trained the chosen model (Prophet, due to its effectiveness with multiple seasonality) on historical sales data. Used metrics like MAE, RMSE, and MAPE to evaluate forecast accuracy.',
        '**Forecast Generation:** Generated sales forecasts for the next 3-6 months. Incorporated external factors like promotions and holidays as regressors.',
      ],
      results: 'The Prophet model provided highly accurate sales forecasts, reducing forecast error by 15% compared to previous methods. This enabled the retail brand to significantly improve inventory planning, leading to a 10% reduction in overstocking and a 5% increase in product availability.',
      visualizations: [
        {
          src: 'https://placehold.co/600x400/DDE4E9/333333?text=Actual+vs+Predicted+Sales',
          alt: 'Actual vs. Predicted Sales',
          caption: 'Actual vs. Predicted Sales with Confidence Intervals'
        },
        {
          src: 'https://placehold.co/600x400/DDE4E9/333333?text=Feature+Importance+Plot',
          alt: 'Feature Importance Plot',
          caption: 'Feature Importance for Churn Prediction Model'
        }
      ]
    }
  },
  {
    id: 'twitter-sentiment-analysis',
    title: 'Twitter Sentiment Analysis',
    category: 'Natural Language Processing',
    shortDescription: 'Developed an NLP pipeline to analyze sentiment of tweets related to a specific product.',
    thumbnail: 'https://placehold.co/400x250/DDE4E9/333333?text=Sentiment+Analysis', // Placeholder image
    githubLink: 'https://github.com/your-github/twitter-sentiment-analysis',
    liveDemoLink: '#',
    details: {
      problem: 'A company wanted to understand public perception and sentiment towards its newly launched product based on Twitter data. The challenge was to process a large volume of unstructured text data and categorize it into positive, negative, or neutral sentiment.',
      technologies: ['Python', 'NLTK', 'TextBlob', 'Scikit-learn', 'Streamlit'],
      methodology: [
        '**Data Acquisition:** Collected tweets using Twitter API (or a mock dataset for demonstration).',
        '**Text Preprocessing:** Preformed tokenization, lowercasing, stop-word removal, stemming/lemmatization, and noise reduction (e.g., removing URLs, hashtags, mentions).',
        '**Feature Extraction:** Converted text data into numerical features using TF-IDF vectorization.',
        '**Sentiment Classification:** Trained machine learning models (e.g., Naive Bayes, SVM, Logistic Regression) on a labeled dataset. Explored using pre-trained models like TextBlob for initial sentiment scoring.',
        '**Evaluation & Refinement:** Evaluated model performance using classification reports and confusion matrices. Iteratively refined preprocessing steps and model parameters.',
        '**Deployment (Optional):** Created a simple web interface using Streamlit to demonstrate real-time sentiment analysis.',
      ],
      results: 'The sentiment analysis model achieved an accuracy of 80% in classifying tweets. The analysis revealed a predominantly positive sentiment towards the new product, with specific negative feedback points related to customer support, which allowed the company to address these issues promptly.',
      visualizations: [
        {
          src: 'https://placehold.co/600x400/DDE4E9/333333?text=Sentiment+Distribution',
          alt: 'Sentiment Distribution',
          caption: 'Distribution of Churn vs. Non-Churn Customers'
        },
        {
          src: 'https://placehold.co/600x400/DDE4E9/333333?text=Feature+Importance+Plot',
          alt: 'Feature Importance Plot',
          caption: 'Word Cloud of Most Frequent Terms in Positive Tweets'
        }
      ]
    }
  },
  {
    id: 'data-visualization-dashboard',
    title: 'Interactive Data Visualization Dashboard',
    category: 'Data Visualization',
    shortDescription: 'Developed a dynamic dashboard to explore a public health dataset.',
    thumbnail: 'https://placehold.co/400x250/ACC1CF/333333?text=Data+Dashboard', // Placeholder image
    githubLink: 'https://github.com/your-github/data-viz-dashboard',
    liveDemoLink: 'https://your-dashboard-live-demo.com', // Example live demo
    details: {
      problem: 'Researchers needed an interactive way to explore a large public health dataset, beyond static reports, to identify trends and anomalies easily.',
      technologies: ['Python', 'Dash', 'Plotly', 'Pandas'],
      methodology: [
        '**Data Preparation:** Loaded and preprocessed the public health dataset (e.g., disease prevalence, demographic info).',
        '**Dashboard Design:** Designed an intuitive user interface with interactive components (dropdowns, sliders, date pickers).',
        '**Visualization Development:** Created various interactive charts (bar charts, line graphs, scatter plots, maps) using Plotly, allowing users to filter and drill down into data.',
        '**Backend Integration:** Connected the front-end components to Python functions to dynamically update visualizations based on user input.',
        '**Deployment:** Deployed the Dash application on a cloud platform (e.g., Heroku, Render) for public access.',
      ],
      results: 'The interactive dashboard provided researchers with a powerful tool to quickly uncover regional health disparities, identify at-risk populations, and track disease progression over time. It significantly reduced the time spent on data exploration and enabled more targeted research efforts.',
      visualizations: [
        {
          src: 'https://placehold.co/600x400/DDE4E9/333333?text=Dashboard+Screenshot+1',
          alt: 'Dashboard Screenshot 1',
          caption: 'Interactive Map of Disease Prevalence'
        },
        {
          src: 'https://placehold.co/600x400/DDE4E9/333333?text=Dashboard+Screenshot+2',
          alt: 'Dashboard Screenshot 2',
          caption: 'Demographic Breakdown of Health Indicators'
        }
      ]
    }
  } ];