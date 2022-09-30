
        function insert(num)
        {
            var numero = document.getElementById('result').innerHTML; 
            // O getElementById retorna a referência do elemento através do seu ID

            document.getElementById('result').innerHTML = numero + num;
        }

        function clean()
        {
            document.getElementById('result').innerHTML = ""; 
        }

        function less()
        {
            var numero = document.getElementById('result').innerHTML; 
            // O getElementById retorna a referência do elemento através do seu ID

            document.getElementById('result').innerHTML = "-" + numero; 
        }

        function porcent()
        {
            var numero = document.getElementById('result').innerHTML; 
            // O getElementById retorna a referência do elemento através do seu ID

            document.getElementById('result').innerHTML = "%" + numero * 0.1; 
        }
        
        function calcular()
        {
            var result = document.getElementById('result').innerHTML;
            if(result)
            {
                document.getElementById('result').innerHTML = eval(result);
            }
            else
            {
                document.getElementById('result').innerHTML = "Nada..."
            }
        }