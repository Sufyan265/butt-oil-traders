import React, { useState, useContext, useEffect } from 'react';
import { Form, Button, Card, Col, Row, Modal, Alert } from 'react-bootstrap';
import { DataContext } from '../../Context/DataContext';
import { AdminContext } from '../../Context/AdminContext';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loading from '../Loading';
import { UserContext } from '../../Context/UserContext';
import { Navigate } from 'react-router-dom';
const initialProduct = { _id: '', img: '', title: '', description: '', category: '', price: '', isBestSelling: false, isPopular: false };

const AdminPage = () => {
    const { products, getProducts, bestProducts, populerProducts } = useContext(DataContext);
    const { addProducts, updateProduct, deleteProduct } = useContext(AdminContext);
    const { userData } = useContext(UserContext);
    const [product, setProduct] = useState(initialProduct);
    const [imagePreview, setImagePreview] = useState('');
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        getProducts();
        bestProducts();
        populerProducts();
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
                setProduct((prev) => ({ ...prev, img: file }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddProduct = async (e) => {
        e.preventDefault();

        if (product.title && product.price) {
            const formData = new FormData();
            formData.append('title', product.title);
            formData.append('description', product.description);
            formData.append('category', product.category);
            formData.append('price', product.price);
            formData.append('isBestSelling', product.isBestSelling);
            formData.append('isPopular', product.isPopular);
            formData.append('image', product.img);


            try {
                if (product._id) {
                    await updateProduct(product._id, formData);
                } else {
                    await addProducts(formData);
                }
                setProduct(initialProduct);
                setImagePreview('');
                setError('');
                setShowModal(false);
            } catch (err) {
                setError('Failed to save product.');
            }
        } else {
            setError('Title and Price are required.');
        }
    };


    const handleEditProduct = (id) => {
        const prod = products.find((p) => p._id === id);
        setProduct(prod);
        setImagePreview(prod.img);
        setError('');
        setShowModal(true);
    };

    const handleRemoveProduct = async (id) => {
        await deleteProduct(id);
    };

    const handleShowModal = () => {
        setProduct(initialProduct);
        setImagePreview('');
        setError('');
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setProduct(initialProduct);
        setImagePreview('');
        setError('');
    };

    if (!userData || !userData.user.isAdmin) {
        alert('You are not authorized to view this page.');
        return <Navigate to="/login" />;
    }


    return (
        <div className="container mt-5">
            <div className="w-100 d-flex justify-content-between mb-4 align-items-center">
                <h1>Admin Dashboard</h1>
            </div>

            <Button variant="dark" className="mb-4 btnStyle" onClick={handleShowModal}>
                Add New Product
            </Button>

            <Row>
                {products.length > 0 ? (
                    products.map((p) => (
                        <Col key={p._id} lg={3} md={4} sm={6} xs={12} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <div className="w-100 d-flex justify-content-end">
                                        <FontAwesomeIcon icon={faPenToSquare} className='mx-2 crudIconStyle' onClick={() => handleEditProduct(p._id)} />
                                        <FontAwesomeIcon icon={faTrashCan} className='mx-2 trashStyle' onClick={() => handleRemoveProduct(p._id)} />
                                    </div>

                                    <Card.Title>{p.title}</Card.Title>
                                    <Card.Text>
                                        <strong>Category:</strong> {p.category}
                                    </Card.Text>
                                    <Card.Text className='paragraphStyle card-desc'>
                                        <strong style={{ color: "black" }}>Description: </strong>{p.description}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Price:</strong> Rs. {p.price}
                                    </Card.Text>
                                    {p.img && (
                                        <img
                                            src={p.img}
                                            alt={p.title}
                                            style={{ maxWidth: '10rem', maxHeight: '10rem' }}
                                        />
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <Loading height="70vh" size="30" />
                )}
            </Row>

            <Modal show={showModal} onHide={handleCloseModal} dialogClassName="m-auto custom-modal my-2">
                <Modal.Header closeButton>
                    <Modal.Title>{product._id ? 'Edit Product' : 'Add New Product'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleAddProduct}>
                        <Form.Group className="mb-3">
                            <Form.Label>ID</Form.Label>
                            <Form.Control
                                type="text"
                                name="id"
                                value={product._id}
                                placeholder="ID will add automatically"
                                readOnly
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Image Upload</Form.Label>
                            <Form.Control
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                            {imagePreview && (
                                <img
                                    src={imagePreview}
                                    alt="Preview"
                                    style={{ maxWidth: '10rem', maxHeight: "8rem", marginTop: '10px' }}
                                />
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={product.title}
                                onChange={(e) => setProduct({ ...product, title: e.target.value })}
                                placeholder="Product Title"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="description"
                                value={product.description}
                                onChange={(e) => setProduct({ ...product, description: e.target.value })}
                                placeholder="Product Description"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                type="text"
                                name="category"
                                value={product.category}
                                onChange={(e) => setProduct({ ...product, category: e.target.value })}
                                placeholder="Product Category"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                name="price"
                                value={product.price}
                                onChange={(e) => setProduct({ ...product, price: e.target.value })}
                                placeholder="Product Price"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check
                                type="checkbox"
                                label="Best Selling"
                                name="isBestSelling"
                                checked={product.isBestSelling}
                                onChange={(e) => setProduct({ ...product, isBestSelling: e.target.checked })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check
                                type="checkbox"
                                label="Popular"
                                name="isPopular"
                                checked={product.isPopular}
                                onChange={(e) => setProduct({ ...product, isPopular: e.target.checked })}
                            />
                        </Form.Group>
                        <Button variant="dark" type="submit" className='btnStyle'>
                            {product._id ? 'Update Product' : 'Add Product'}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default AdminPage;