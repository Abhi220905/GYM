import React, { useState, useEffect } from "react";

const Join = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    membershipPlan: "",
    paymentMethod: "",
    emergencyContact: "",
    emergencyPhone: "",
    medicalConditions: "",
  };

  // Load form data from localStorage on component mount
  const loadFormData = () => {
    try {
      const savedData = localStorage.getItem("gymJoinFormData");
      if (savedData) {
        return JSON.parse(savedData);
      }
    } catch (error) {
      console.error("Error loading form data from localStorage:", error);
    }
    return initialFormData;
  };

  const [formData, setFormData] = useState(loadFormData);
  const [submittedApplications, setSubmittedApplications] = useState([]);
  const [showApplications, setShowApplications] = useState(false);

  // Load submitted applications from localStorage
  const loadApplications = () => {
    try {
      const applications = JSON.parse(localStorage.getItem("gymApplications") || "[]");
      setSubmittedApplications(applications);
    } catch (error) {
      console.error("Error loading applications:", error);
    }
  };

  // Load applications on component mount
  useEffect(() => {
    loadApplications();
  }, []);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("gymJoinFormData", JSON.stringify(formData));
    } catch (error) {
      console.error("Error saving form data to localStorage:", error);
    }
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save submitted application to a separate storage for records
    try {
      const applications = JSON.parse(localStorage.getItem("gymApplications") || "[]");
      const application = {
        ...formData,
        submittedAt: new Date().toISOString(),
        id: Date.now().toString(),
      };
      applications.push(application);
      localStorage.setItem("gymApplications", JSON.stringify(applications));
    } catch (error) {
      console.error("Error saving application:", error);
    }

    console.log("Form submitted:", formData);
    alert("Thank you for joining! We'll contact you soon.");
    
    // Refresh applications list
    loadApplications();
    setShowApplications(true);
    
    // Clear the form and localStorage
    const resetData = { ...initialFormData };
    setFormData(resetData);
    localStorage.removeItem("gymJoinFormData");
  };

  // Delete application
  const handleDeleteApplication = (id) => {
    if (window.confirm("Are you sure you want to delete this application?")) {
      try {
        const applications = submittedApplications.filter(app => app.id !== id);
        localStorage.setItem("gymApplications", JSON.stringify(applications));
        loadApplications();
      } catch (error) {
        console.error("Error deleting application:", error);
      }
    }
  };

  // Clear all applications
  const handleClearAllApplications = () => {
    if (window.confirm("Are you sure you want to delete all submitted applications?")) {
      try {
        localStorage.removeItem("gymApplications");
        setSubmittedApplications([]);
      } catch (error) {
        console.error("Error clearing applications:", error);
      }
    }
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  // Format membership plan name
  const formatPlanName = (plan) => {
    const plans = {
      basic: "Basic Plan - $29/month",
      premium: "Premium Plan - $49/month",
      vip: "VIP Plan - $79/month"
    };
    return plans[plan] || plan;
  };

  // Optional: Clear saved data button
  const handleClearData = () => {
    if (window.confirm("Are you sure you want to clear all saved form data?")) {
      setFormData(initialFormData);
      localStorage.removeItem("gymJoinFormData");
    }
  };

  return (
    <>
      <div className="join-page">
        <div className="join-wrapper">
          {/* LEFT SECTION - Info */}
          <div className="join-info">
            <h1>Start Your Fitness Journey</h1>
            <p className="intro">
              Join our community of fitness enthusiasts and transform your life. 
              Get access to state-of-the-art equipment, expert trainers, and unlimited motivation.
            </p>

            <div className="info-block">
              <h3>💪 Membership Benefits</h3>
              <ul>
                <li>24/7 Gym Access</li>
                <li>Personal Training Sessions</li>
                <li>Group Fitness Classes</li>
                <li>Nutritional Guidance</li>
                <li>Locker & Shower Facilities</li>
              </ul>
            </div>

            <div className="info-block">
              <h3>⭐ Membership Plans</h3>
              <div className="plan-highlight">
                <strong>Basic Plan</strong> - ₹399/month
              </div>
              <div className="plan-highlight">
                <strong>Premium Plan</strong> - ₹599/month
              </div>
              <div className="plan-highlight">
                <strong>VIP Plan</strong> - ₹999/month
              </div>
            </div>
          </div>

          {/* RIGHT SECTION - Form */}
          <div className="join-form">
            <div className="form-header-wrapper">
              <h2>Membership Application</h2>
              <button 
                type="button" 
                onClick={handleClearData} 
                className="clear-data-btn"
                title="Clear saved form data"
              >
                Clear Saved Data
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div className="form-section">
                <h3>Personal Information</h3>
                <div className="form-row">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Address */}
              <div className="form-section">
                <h3>Address</h3>
                <input
                  type="text"
                  name="address"
                  placeholder="Street Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
                <div className="form-row">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="Zip Code"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Membership Plan */}
              <div className="form-section">
                <h3>Select Membership Plan</h3>
                <select
                  name="membershipPlan"
                  value={formData.membershipPlan}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose a Plan</option>
                  <option value="basic">Basic Plan - ₹399/month</option>
                  <option value="premium">Premium Plan - ₹599/month</option>
                  <option value="vip">VIP Plan - ₹999/month</option>
                </select>
              </div>

              {/* Payment Method */}
              <div className="form-section">
                <h3>Payment Method</h3>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Payment Method</option>
                  <option value="credit">Credit Card</option>
                  <option value="debit">Debit Card</option>
                  <option value="bank">Bank Transfer</option>
                  <option value="bank">UPI   Transfer</option>
                </select>
              </div>

              {/* Emergency Contact */}
              <div className="form-section">
                <h3>Emergency Contact</h3>
                <input
                  type="text"
                  name="emergencyContact"
                  placeholder="Emergency Contact Name"
                  value={formData.emergencyContact}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="emergencyPhone"
                  placeholder="Emergency Contact Phone"
                  value={formData.emergencyPhone}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Medical Information */}
              <div className="form-section">
                <h3>Medical Information (Optional)</h3>
                <textarea
                  name="medicalConditions"
                  rows="4"
                  placeholder="Any medical conditions or injuries we should be aware of?"
                  value={formData.medicalConditions}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="join-submit-btn">
                Submit Application
              </button>
            </form>

            {/* View Applications Button */}
            <div className="view-applications-wrapper">
              <button 
                type="button" 
                onClick={() => setShowApplications(!showApplications)}
                className="view-applications-btn"
              >
                {showApplications ? "Hide" : "View"} Submitted Applications ({submittedApplications.length})
              </button>
            </div>

            {/* Applications Display Section - Inside Form */}
            {showApplications && submittedApplications.length > 0 && (
              <div className="applications-section">
                <div className="applications-header">
                  <h2>Submitted Applications</h2>
                  <button 
                    onClick={handleClearAllApplications}
                    className="clear-all-btn"
                  >
                    Clear All
                  </button>
                </div>
                <div className="applications-grid">
                  {submittedApplications.map((application) => (
                    <div key={application.id} className="application-card">
                      <div className="application-card-header">
                        <h3>
                          {application.firstName} {application.lastName}
                        </h3>
                        <button
                          onClick={() => handleDeleteApplication(application.id)}
                          className="delete-btn"
                          title="Delete application"
                        >
                          ×
                        </button>
                      </div>
                      <div className="application-card-body">
                        <div className="application-field">
                          <strong>Email:</strong> {application.email}
                        </div>
                        <div className="application-field">
                          <strong>Phone:</strong> {application.phone}
                        </div>
                        <div className="application-field">
                          <strong>Address:</strong> {application.address}, {application.city}, {application.zipCode}
                        </div>
                        <div className="application-field">
                          <strong>Membership Plan:</strong> {formatPlanName(application.membershipPlan)}
                        </div>
                        <div className="application-field">
                          <strong>Payment Method:</strong> {application.paymentMethod.charAt(0).toUpperCase() + application.paymentMethod.slice(1)}
                        </div>
                        <div className="application-field">
                          <strong>Emergency Contact:</strong> {application.emergencyContact} ({application.emergencyPhone})
                        </div>
                        {application.medicalConditions && (
                          <div className="application-field">
                            <strong>Medical Info:</strong> {application.medicalConditions}
                          </div>
                        )}
                        <div className="application-field application-date">
                          <strong>Submitted:</strong> {formatDate(application.submittedAt)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {showApplications && submittedApplications.length === 0 && (
              <div className="applications-section">
                <div className="no-applications">
                  <p>No applications submitted yet.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Join;

