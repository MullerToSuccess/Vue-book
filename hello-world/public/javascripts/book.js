/**
 * Created by XZH-CD on 2016/11/14.
 */
new Vue({
    el: '#app',
    data: {
        msg: 'ok',
        book: {
            id: 0,
            author: '',
            name: '',
            price: ''
        },
        books: [{
            id: 1,
            author: '曹雪芹',
            name: '红楼梦',
            price: 32.0
        }, {
            id: 2,
            author: '罗贯中',
            name: '三国演义',
            price: 30.0
        }, {
            id: 3,
            author: '吴承恩',
            name: '西游记',
            price: 24.0
        }, {
            id: 4,
            author: '施耐庵',
            name: '水浒传',
            price: 20.0
        }]
    },
    computed: {
        sum: function(){
            var result = 0;
            for(var i=0;i<this.books.length;i++){
                result += Number(this.books[i].price);
            }
            return result;
        }
    },
    methods: {
        delBook: function(book){
            this.books.$remove(book);
        },
        addBook: function() {
            this.book.id = this.books.length + 1;
            this.books.push(this.book);
            this.book = '';
        }
    }
});