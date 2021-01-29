//Do the following steps in this file, and make sure this file is linked to the shopping-list.html file

   // 1. Create three variables that hold references to the following elements &lt;ul&gt; &lt;input&gt; &lt;button&gt; elements.
   const list = document.querySelector('ul'); 
   const input = document.querySelector('input'); 
   const btn = document.querySelector('button'); 

   // 2. Create a function that will run in response to the button being clicked.
    btn.onclick = function(){

      //  3. Inside the function body, start off by storing the current value of the input element in a variable.
        let item = input.value;

        //  4. Next, empty the input element by setting its value to an empty string — ''.
        input.value = '';

        //  5. Create three new elements — a list item (&lt;li&gt;), &lt;span&gt;, and &lt;button&gt;, and store them in variables.
        const listItem = document.createElement('li');
        const listSpan = document.createElement('span');
        const listBtn = document.createElement('button');

       //  6. Append the span and the button as children of the list item.
        listItem.appendChild(listSpan);
        listItem.appendChild(listBtn);

        //  7. Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'
        listSpan.textContent = item;
        listBtn.textContent = 'Delete';

         //  8. Append the list item as a child of the list.
        list.appendChild(listItem);

        //  9. Attach an event handler to the delete button, so that when clicked it will delete the entire list item it is inside.
        listBtn.onclick = function (e) {
            list.removeChild(listItem);
        }
          //  10. Finally, use the focus() method to focus the input element ready for entering the next shopping list item.
          input.focus();
    }