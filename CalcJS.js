
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
        function back()
        {
            var result = document.getElementById('result').innerHTML;
            document.getElementById('result').innerHTML = result.substring(0, result.length -1);
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