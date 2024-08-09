import React, { useState, useContext, useEffect } from 'react';
import { Form, Button, Card, Col, Row, Modal, Alert } from 'react-bootstrap';
import { DataContext } from '../../Context/DataContext';
import '../Styles/adminStyle.css';
import { useNavigate } from 'react-router-dom';

const initialProduct = { id: '', img: '', title: '', desc: '', category: '', price: '' };

const AdminPage = () => {
    const { shopData, setShopData } = useContext(DataContext); // Use Context API
    const [product, setProduct] = useState(initialProduct);
    const [products, setProducts] = useState(shopData || []);
    const [imagePreview, setImagePreview] = useState('');
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isAdmin');
        navigate('/adminlogin');
    };

    useEffect(() => {
        setProducts(shopData);
    }, [shopData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
                setProduct((prev) => ({ ...prev, img: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        const existingProduct = products.find((p) => p.id === product.id);

        if (existingProduct) {
            if (product.id === existingProduct.id) {
                setError('Product ID already exists. Please use a different ID.');
                return;
            }
        }

        if (product.id && product.title && product.price) {
            const updatedProducts = existingProduct
                ? products.map((p) => (p.id === product.id ? product : p))
                : [...products, product];

            setProducts(updatedProducts);
            setShopData(updatedProducts); // Update Context API
            setProduct(initialProduct);
            setImagePreview('');
            setError('');
            setShowModal(false); // Close modal
        }
    };

    const handleEditProduct = (id) => {
        const prod = products.find((p) => p.id === id);
        setProduct(prod);
        setImagePreview(prod.img);
        setError('');
        setShowModal(true);
    };

    const handleRemoveProduct = (id) => {
        const updatedProducts = products.filter((p) => p.id !== id);
        setProducts(updatedProducts);
        setShopData(updatedProducts); // Update Context API
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

    return (
        <div className="container mt-5">
            <div className="w-100 d-flex justify-content-between mb-4 align-items-center">
                <h1>Admin Dashboard</h1>
                <Button variant="dark" onClick={handleLogout}>Logout →</Button>
            </div>

            <Button variant="primary" className="mb-4" onClick={handleShowModal}>
                Add New Product
            </Button>

            <Row>
                {products.length > 0 ? (
                    products.map((p) => (
                        <Col key={p.id} md={4} sm={6} xs={12} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>{p.title}</Card.Title>
                                    <Card.Text>
                                        <strong>Category:</strong> {p.category}
                                    </Card.Text>
                                    <Card.Text className='paragraphStyle card-desc'>
                                        <strong style={{color: "black"}}>Description: </strong>{p.desc}
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
                                    <Button
                                        variant="warning"
                                        onClick={() => handleEditProduct(p.id)}
                                        className="mt-2"
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        variant="danger"
                                        onClick={() => handleRemoveProduct(p.id)}
                                        className="mt-2 ms-2"
                                    >
                                        Remove
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <p>No products available</p>
                )}
            </Row>

            <Modal show={showModal} onHide={handleCloseModal} dialogClassName="m-auto custom-modal">
                <Modal.Header closeButton>
                    <Modal.Title>{product.id ? 'Edit Product' : 'Add New Product'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleAddProduct}>
                        <Form.Group className="mb-3">
                            <Form.Label>ID</Form.Label>
                            <Form.Control
                                type="text"
                                name="id"
                                value={product.id}
                                onChange={handleInputChange}
                                placeholder="Product ID"
                                required
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
                                onChange={handleInputChange}
                                placeholder="Product Title"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="desc"
                                value={product.desc}
                                onChange={handleInputChange}
                                placeholder="Product Description"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                type="text"
                                name="category"
                                value={product.category}
                                onChange={handleInputChange}
                                placeholder="Product Category"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                name="price"
                                value={product.price}
                                onChange={handleInputChange}
                                placeholder="Product Price"
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            {product.id ? 'Update Product' : 'Add Product'}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default AdminPage;
