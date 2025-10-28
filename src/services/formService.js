/**
 * Form Submission Service
 * Handles form submissions to the backend
 */
import apiService from './apiService';

class FormService {
  // Submit contact form
  async submitContactForm(formData) {
    const submissionData = {
      form_type: 'contact',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message || '',
      additional_data: {
        city: formData.city,
        service: formData.service
      }
    };

    return apiService.submitForm(submissionData);
  }

  // Submit solar inquiry form
  async submitSolarInquiry(formData) {
    const submissionData = {
      form_type: 'solar_inquiry',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message || '',
      additional_data: {
        address: formData.address,
        city: formData.city,
        units: formData.units,
        service: formData.service || 'Solar Installation',
        budget: formData.budget,
        property_type: formData.property_type
      }
    };

    return apiService.submitForm(submissionData);
  }

  // Submit waste water management form
  async submitWWMForm(formData) {
    const submissionData = {
      form_type: 'wwm_inquiry',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message || '',
      additional_data: {
        location: formData.location,
        city: formData.city,
        service_type: formData.service_type,
        capacity: formData.capacity
      }
    };

    return apiService.submitForm(submissionData);
  }

  // Submit maintenance request
  async submitMaintenanceRequest(formData) {
    const submissionData = {
      form_type: 'maintenance',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message || '',
      additional_data: {
        installation_id: formData.installation_id,
        issue_type: formData.issue_type,
        priority: formData.priority,
        preferred_date: formData.preferred_date
      }
    };

    return apiService.submitForm(submissionData);
  }

  // Submit investment inquiry
  async submitInvestmentInquiry(formData) {
    const submissionData = {
      form_type: 'investment',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message || '',
      additional_data: {
        investment_amount: formData.investment_amount,
        investment_type: formData.investment_type,
        timeline: formData.timeline,
        risk_tolerance: formData.risk_tolerance
      }
    };

    return apiService.submitForm(submissionData);
  }

  // Generic form submission
  async submitGenericForm(formData, formType) {
    const submissionData = {
      form_type: formType,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message || '',
      additional_data: formData.additional_data || {}
    };

    return apiService.submitForm(submissionData);
  }

  // Get user's form submissions
  async getUserSubmissions() {
    return apiService.getMySubmissions();
  }

  // Get all submissions (admin only)
  async getAllSubmissions() {
    return apiService.getAllSubmissions();
  }
}

// Create singleton instance
const formService = new FormService();

export default formService;



