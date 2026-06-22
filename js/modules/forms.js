// ============================================
// Forms Module — Validation
// ============================================

export function initForms() {
  const forms = document.querySelectorAll('form[novalidate]');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (validateForm(form)) {
        // Success state
        const submitBtn = form.querySelector('[type="submit"]');
        if (submitBtn) {
          submitBtn.classList.add('loading');
          submitBtn.disabled = true;

          // Simulate submission (replace with actual endpoint)
          setTimeout(() => {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;

            // Show success message
            showFormMessage(form, 'success', 'تم إرسال طلبك بنجاح! سنتواصل معك قريباً.');

            // Reset form
            form.reset();
          }, 1500);
        }
      }
    });

    // Real-time validation on blur
    const inputs = form.querySelectorAll('.form-input, .form-select, .form-textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        validateField(input);
      });

      input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
          validateField(input);
        }
      });
    });
  });
}

function validateForm(form) {
  const fields = form.querySelectorAll('[required]');
  let isValid = true;

  fields.forEach(field => {
    if (!validateField(field)) {
      isValid = false;
    }
  });

  return isValid;
}

function validateField(field) {
  const value = field.value.trim();
  let isValid = true;
  let message = '';

  // Required check
  if (field.hasAttribute('required') && !value) {
    isValid = false;
    message = 'هذا الحقل مطلوب';
  }

  // Email validation
  if (field.type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
      message = 'يرجى إدخال بريد إلكتروني صحيح';
    }
  }

  // Phone validation
  if (field.type === 'tel' && value) {
    const phoneRegex = /^[\d\s\+\-\(\)]{9,15}$/;
    if (!phoneRegex.test(value)) {
      isValid = false;
      message = 'يرجى إدخال رقم هاتف صحيح';
    }
  }

  // Select validation
  if (field.tagName === 'SELECT' && !value) {
    isValid = false;
    message = 'يرجى اختيار خيار';
  }

  // Update UI
  if (isValid) {
    field.classList.remove('error');
    field.classList.add('success');
    removeError(field);
  } else {
    field.classList.add('error');
    field.classList.remove('success');
    showError(field, message);
  }

  return isValid;
}

function showError(field, message) {
  removeError(field);
  const error = document.createElement('div');
  error.className = 'form-error visible';
  error.textContent = message;
  field.parentNode.appendChild(error);
}

function removeError(field) {
  const existing = field.parentNode.querySelector('.form-error');
  if (existing) existing.remove();
}

function showFormMessage(form, type, message) {
  // Remove existing messages
  const existing = form.parentNode.querySelector('.form-message');
  if (existing) existing.remove();

  const msg = document.createElement('div');
  msg.className = `form-message form-message--${type}`;
  msg.style.cssText = `
    padding: 1rem 1.5rem;
    border-radius: 0.75rem;
    margin-top: 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    text-align: center;
    animation: slideDown 0.3s ease;
    background: ${type === 'success' ? 'var(--color-success-light)' : 'var(--color-error-light)'};
    color: ${type === 'success' ? '#1A9C4A' : 'var(--color-error)'};
    border: 1px solid ${type === 'success' ? '#B7EACB' : '#F5C6CB'};
  `;
  msg.textContent = message;
  form.parentNode.appendChild(msg);

  // Auto-remove after 5s
  setTimeout(() => {
    msg.style.opacity = '0';
    msg.style.transition = 'opacity 0.3s ease';
    setTimeout(() => msg.remove(), 300);
  }, 5000);
}
