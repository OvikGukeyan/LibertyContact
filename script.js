document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Предотвращаем отправку формы
  
      // Очищаем предыдущие сообщения об ошибках
      document.querySelectorAll('.error-message').forEach(function(element) {
        element.textContent = '';
      });
  
      // Валидация формы
      const name = form.elements['name'].value.trim();
      const email = form.elements['email'].value.trim();
      const message = form.elements['message'].value.trim();
  
      if (name === '') {
        document.getElementById('nameError').textContent = 'Пожалуйста, введите ваше имя';
        return;
      }
  
      if (email === '') {
        document.getElementById('emailError').textContent = 'Пожалуйста, введите ваш email';
        return;
      } else if (!isValidEmail(email)) {
        document.getElementById('emailError').textContent = 'Пожалуйста, введите корректный email';
        return;
      }
  
      if (message === '') {
        document.getElementById('messageError').textContent = 'Пожалуйста, введите ваше сообщение';
        return;
      }
  
      // Если все поля прошли валидацию, можно отправить форму
      console.log('Форма успешно отправлена!');
      // form.submit(); // Расскомментируйте, чтобы отправить форму на сервер
    });
  
    function isValidEmail(email) {
      // Базовая валидация email с помощью регулярного выражения
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  });

  const queryParams = new URLSearchParams(window.location.search);
// const paramValue = queryParams.get('paramName');
console.log(queryParams)

  