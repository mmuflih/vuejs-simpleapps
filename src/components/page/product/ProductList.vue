/*
* @Author: Muhammad Muflikh Kholidin
* @Date:   2016-09-15 07:56:42
* @Last Modified by:   Muflih Kholidin
* @Last Modified time: 2016-09-17 08:46:06
*/
<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      Product
    </div>
    <div class="panel-body">
      <div class="form-group pull-left">
        <button class="btn btn-success" data-toggle="modal" data-target="#add-product" @click="add()">
          <i class="glyphicon glyphicon-plus" aria-hidden="true"></i> Add New Product
        </button>
      </div>
      <table id="example2" class="table table-bordered table-hover">
        <thead>
        <tr>
          <th>SKU Code</th>
          <th>PLU Code</th>
          <th>Name</th>
          <th>Status</th>
          <th>&nbsp;</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="i in products">
          <td>{{ i.sku_code }}</td>
          <td>{{ i.plu_code }}</td>
          <td>{{ i.name }}</td>
          <td>
            <span v-show="i.status == 1" class="label label-success">{{ i.status_desc }}</span>
            <span v-show="i.status != 1" class="label label-default">{{ i.status_desc }}</span>
          </td>
          <td align="center">
            <a title="Edit Product" @click="edit(i)" data-toggle="modal" data-target="#add-product" class="as-btn"><i class="link glyphicon glyphicon-edit"></i></a>
            &nbsp;
            <a title="Delete Product" @click="del(i)" class="as-btn"><i class="link glyphicon glyphicon-remove"></i></a>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="form-group pull-left">
        <button class="btn btn-info" @click="list()" id="refresh">
          <i class="glyphicon glyphicon-refresh" aria-hidden="true"></i> Refresh
        </button>
      </div>
      <div class="btn-group pull-right" role="group" aria-label="...">
        <button type="button" class="btn btn-default" @click="back">Back</button>
        <button type="button" class="btn btn-default" @click="next">Next</button>
      </div><!-- /.row -->
    </div>
  </div>
  <div class="modal fade" id="add-product" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="exampleModalLabel" v-show="isUpdate == false">Add New Product</h4>
          <h4 class="modal-title" id="exampleModalLabel" v-show="isUpdate">Update Product [{{ product.id }}]</h4>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="sku-code" class="control-label">SKU Code:</label>
              <input type="text" class="form-control" id="sku-code" v-model="product.sku_code">
            </div>
            <div class="form-group">
              <label for="plu-code" class="control-label">PLU Code:</label>
              <input type="text" class="form-control" id="plu-code" v-model="product.plu_code">
            </div>
            <div class="form-group">
              <label for="name" class="control-label">Name:</label>
              <input type="text" class="form-control" id="name" v-model="product.name">
            </div>
            <div class="form-group">
              <label>
                <input type="checkbox" class="minimal" checked v-model="product.status">
                Active
              </label>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" v-show="isUpdate == false" @click="save()">Save</button>
          <button type="button" class="btn btn-primary" v-show="isUpdate" @click="update()">Update</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style type="text/css">
  #refresh:hover {
    cursor: pointer;
    font-weight: bold;
  }
</style>

<script>
import {getProducts, deleteProduct, updateProduct, saveProduct, getProduct} from '../../../services/ProductService'
import alertify from 'alertify.js'

export default {
  data () {
    return {
      products: [],
      product: {
        status: true
      },
      s: 10,
      p: 1,
      isUpdate: false
    }
  },
  ready(){
    this.list()
  },
  methods: {
    list() {
      getProducts(this.s, this.p).then(response => {
        this.products = response.json().data
      }, errorResponse => {
        alertify.error(errorResponse.json().message)
      })
    },
    del(product) {
      alertify.confirm("Yakin akan menghapus product " + product.name + "?", () => {
        deleteProduct(product).then((response) => {
          alertify.success(response.json().message.message)
          $("#refresh").click()
        }, (response) => {
          alertify.error(response.json().message)
        })
      });
    },
    add() {
      this.isUpdate = false
      this.product = {}
    },
    save() {
      this.product.status = (this.product.status) ? 1 : 2
      saveProduct(this.product).then((response) => {
        $('#add-product').modal('hide')
        alertify.success(response.json().message.message)
        this.product = {}
        this.list()
      }, (response) => {
        alertify.error(response.json().message);
      })
    },
    edit(product) {
      this.isUpdate = true
      product.status = product.status == 1 ? true : false
      this.product = product
    },
    update() {
      this.product.status = (this.product.status) ? 1 : 2
      updateProduct(this.product.id, this.product).then((response) => {
        $('#add-product').modal('hide')
        this.list()
      }, (errorResponse) => {
        alertify.error(errorResponse.json().message)
      });
    },
    next() {
      alertify.success("test")
    },
    back() {
    }
  }
}
</script>